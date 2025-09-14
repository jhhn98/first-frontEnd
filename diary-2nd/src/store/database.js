import { openDB } from 'idb'

const initDatabase = async () => {
  const db = await openDB('diaryDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('diaries')) {
        db.createObjectStore('diaries', { keyPath: 'date' })
      }
    },
  })

  return db
}

export const addDiaryArticle = async (article) => {
  const db = await initDatabase()
  const tx = db.transaction('diaries', 'readwrite')
  const store = tx.objectStore('diaries')
  await store.add(article)
  await tx.done
}

export const updateDiaryArticle = async (article) => {
  const db = await initDatabase()
  const tx = db.transaction('diaries', 'readwrite')
  const store = tx.objectStore('diaries')
  await store.put(article) 
  await tx.done
}

export const removeDiaryEntry = async (date) => {
  const db = await initDatabase()
  const tx = db.transaction('diaries', 'readwrite')
  const store = tx.objectStore('diaries')
  await store.delete(date)
  await tx.done
}

export const getDiaryArticle = async (date) => {
  const db = await initDatabase()
  const tx = db.transaction('diaries', 'readonly')
  const store = tx.objectStore('diaries')
  const article = await store.get(date)
  return article
}

export const getDiaryArticles = async (month) => {
  const db = await initDatabase()
  const tx = db.transaction('diaries', 'readonly')
  const store = tx.objectStore('diaries')
  const startDate = month + '-01'
  const endDate = month + '-31'
//달의 시작날짜와 끝날짜를 지정하는데 끝날짜는 항상 31일이 되어도 상관 없다. 데이터에 없는날짜면 검색결과를 안넣으면 되는거기때문에 오류 나지 않는다. 전혀 문제될 것이 없다!
//왜 항상 31일인지 궁금했음.
  const range = IDBKeyRange.bound(startDate, endDate)
  let cursor = await store.openCursor(range);

  const articles = []

  while (cursor) {
    articles.push(cursor.value)
    cursor = await cursor.continue()
  }

  return articles
}

export default initDatabase