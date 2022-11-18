function sum(a: number, b: number) {
  return a + b;
}

test("Teste de soma a + b", () => {
  expect(sum(1, 2)).toBe(3);
})