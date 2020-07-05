import {
    reactive,
    effect
  } from '../src'
  import { mockWarn } from '@vue/shared'


const computed = (fn: Function):any => {
  let value:any;
  effect(() => {
    value = fn()
  })
  return {
    get value() {
      return value;
    }
  };
}

  
  describe('reactivity/computed', () => {
    mockWarn()
  
    it('should return updated value', () => {
      const value = reactive<{ foo?: number }>({})
      const cValue = computed(() => value.foo)
      expect(cValue.value).toBe(undefined)
      value.foo = 1
      expect(cValue.value).toBe(1)
    })
})
  