import { put, takeEvery, call } from 'redux-saga/effects'
import { hideLoader, showAlert, showLoader } from '../Action/actions'
import { FETCH_POSTS, REQUEST__POSTS } from '../Type/types'

export function* sagaWatcher() {
	yield takeEvery(REQUEST__POSTS, sagaWorker)
}

function* sagaWorker() {
	try {
		yield put(showLoader())
		const payload = yield call(fetchPosts)
		yield put({ type: FETCH_POSTS, payload })
		yield put(hideLoader())
	} catch (error) {
		yield put(showAlert('Ошибка при обращении к серверу '))
		yield put(hideLoader())
	}
}


async function fetchPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	return await response.json();
}