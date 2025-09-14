
context('일기장 앱의 기본 테스트', () => {
//context의 첫번째 인자는 문자. 어떤 테스트를 하는거야 라는 설명.
  beforeEach(() => {
    cy.visit('http://localhost:6060')
  }) //beforeEach로 감싸주지 않으면 아래 테스트코드로 테스트를 할때마다 사이트를 다시 접속하게 된다. 
  //beforeEach에 넣어주면 아래 테스트 모두에서 이 일기장 앱에 이미 접속이 되어있는 상태다 라고 인지하고 돌아감.

  it('타이틀 유효성 테스트', () => {
    cy.title().should('eq', '나의 일기장')
  })

  it('월 변경 작동 확인', () => {
    cy.get('.titlebar').invoke('text').then(initialContent => {
      cy.get('[data-test=prev]').click();
      cy.get('.titlebar').should('not.have.text', initialContent);
    });
  })


})