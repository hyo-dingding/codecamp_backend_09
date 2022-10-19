// 1개 테스트 하기

it('더하기 테스트', () => {
  const a = 1;
  const b = 2;

  expect(a + b).toBe(3); // 정답도 우리가 줘야함
});

// 2. 여러개 묶음으로 테스트하기

describe('나의 테스트 그룹', () => {
  it('더하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a + b).toBe(3); // 정답도 우리가 줘야함
  });

  it('곱하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a * b).toBe(2); // 정답도 우리가 줘야함
  });
});

// 3. 상품구매하기 테스트 예제

describe('상품구매 테스트', () => {
  beforeEach(() => {
    //  로그인 로직 작성
  });

  it('돈검증하기', () => {
    const result = true; // 돈이 충분하다고 가정
    expect(result).toBe(true);
  });

  it('상품구매하기 ', () => {
    const result = true; // 상품을 구매했다고 가정
    expect(result).toBe(true);
  });
});
