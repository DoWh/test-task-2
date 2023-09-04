import { faker } from '@faker-js/faker'
import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

export interface iTodo {
  userId: number
  id: number
  title: string
  titleHide?: boolean
  completed: boolean
  description?: string
  descriptionHide?: boolean
  startDate?: Date
  endDate?: Date
  tags?: string[]
}

class TodoStore {
  todos: iTodo[] = []
  isInit: boolean = false
  isLoading: boolean = false
  page: number = 1

  constructor() {
    makeAutoObservable(this)
  }

  loadMoreTodos = async () => {
    //check for double call loadMoreTodos
    if (this.isLoading) return
    this.setLoading(true)
    try {
      const response = await axios.get<iTodo[]>(
        `https://jsonplaceholder.typicode.com/todos?_page=${this.page}&_limit=10`
      )
      runInAction(() => {
        this.addTodos(response.data)
        this.setLoading(false)
        this.page++
      })
    } catch (error) {
      runInAction(() => {
        this.setLoading(false)
      })
      console.error('Failed to fetch todos', error)
    }
  }
  setLoading = (value: boolean) => {
    this.isLoading = value
  }

  addTodos = (newTodos: iTodo[]) => {
    //add faked data
    this.todos.push(
      ...newTodos.map(item => {
        return {
          ...item,
          title: item.title + item.title, //just for x2 length
          titleHide: true,
          descriptionHide: true,
          description: faker.commerce.productDescription(),
          startDate: faker.date.anytime(),
          endDate: faker.date.anytime(),
          tags: [faker.word.words(1), faker.word.words(1)],
        }
      })
    )
  }

  toggleTodo = (todo: iTodo) => {
    todo.completed = !todo.completed
  }
  toggleTitleHidden = (todo: iTodo) => {
    todo.titleHide = !todo.titleHide
  }
  toggleDescriptionHide = (todo: iTodo) => {
    todo.descriptionHide = !todo.descriptionHide
  }
}

const todoStore = new TodoStore()
export default todoStore
