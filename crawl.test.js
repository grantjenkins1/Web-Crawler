const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')


test("Test: ", () => {
    expect(normalizeURL("hello")).toBe("hello")
})