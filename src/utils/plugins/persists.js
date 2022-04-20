import { debounce } from "@/utils";
export default function persists(store) {
  let local = localStorage.getItem('VUEX:STATE')

  if (local) {
    store.replaceState(JSON.parse(local))
  }
  store.subscribe(debounce((mutation, state) => {
    // 只要频繁操作 就要考虑防抖和节流
    localStorage.setItem('VUEX:STATE', JSON.stringify(state))
  }))
}