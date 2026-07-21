import { useState, useTransition } from "react";
import styles from "./Ex18.module.css";

// 1. 대용량 모의 데이터 생성 (10,000개 제품 데이터)
const generateLargeData = () => {
  const items = [];
  const categories = ["전자기기", "의류/패션", "뷰티/화장품", "도서/학습", "식음료", "스포츠/레저"];
  for (let i = 1; i <= 10000; i++) {
    items.push({
      id: i,
      name: `프리미엄 스마트 ${categories[i % categories.length]} 기기 상품코드 #${i}`,
      category: categories[i % categories.length],
      price: (10000 + (i * 123) % 900000),
      serial: `SN-${i * 777}-${i % 3 ? "A" : "B"}`
    });
  }
  return items;
};

const DUMMY_PRODUCTS = generateLargeData();

function Ex18() {
  // 인풋박스 글자 자체는 즉각 반영해야 타자가 안 끊기므로 별도 useState로 관리
  const [inputValue, setInputValue] = useState("");
  // 필터 검색어 상태
  const [filterQuery, setFilterQuery] = useState("");
  // useTransition 훅 선언: [지연중여부, 트랜지션시작함수] = useTransition()
  const [isPending, startTransition] = useTransition();
  // 기능의 극적인 체험을 위해 useTransition 사용 여부를 켜고 끌 수 있는 토글 장착
  const [useOptimization, setUseOptimization] = useState(true);

  // 무거운 필터 처리 함수
  const filteredProducts = DUMMY_PRODUCTS.filter((prod) => {
    // 억지로 부하를 주기 위한 고의 지연 연산 (수업 시간 렉 현상 재현)
    const start = performance.now();
    while (performance.now() - start < 0.04) {
      // 각 아이템당 0.04ms의 딜레이를 유발하여 총 10,000개 필터링 시 강력한 렉 유도
    }
    return prod.name.includes(filterQuery) || prod.category.includes(filterQuery);
  });

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setInputValue(val); // 1. 검색창 텍스트는 즉시 입력 상태로 동기화 (멈춤현상 방지용)

    if (useOptimization) {
      // 💡 [핵심] startTransition으로 감싸 긴급하지 않은 렌더링 작업을 백그라운드로 미룹니다.
      startTransition(() => {
        setFilterQuery(val);
      });
    } else {
      // 최적화 미적용: 동기식으로 일괄 처리 (렉 유발)
      setFilterQuery(val);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>수업용 예제 #18</span>
        <h1>18. useTransition 기반 동시성 렌더링 최적화</h1>
        <p className={styles.description}>
          대량의 데이터를 화면에 그리면서 검색 필터를 거는 무거운 렌더링 환경에서, 
          화면 얼어붙음(UI 블로킹) 현상을 <strong>Concurrent(동시성) API</strong>를 통해 완벽하게 해결합니다.
        </p>
      </header>

      {/* 컨트롤 패널 */}
      <section className={styles.controlPanel}>
        <div className={styles.toggleContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={useOptimization}
              onChange={(e) => setUseOptimization(e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
          <span className={styles.toggleLabel}>
            최적화 기능 (<code>useTransition</code>) : {" "}
            {useOptimization ? (
              <strong className={styles.onText}>ON (부드러운 타자감)</strong>
            ) : (
              <strong className={styles.offText}>OFF (심각한 키보드 렉 발생)</strong>
            )}
          </span>
        </div>
        <p className={styles.instruction}>
          📌 <strong>실험 방법</strong>: 최적화를 끄고(OFF) 검색창에 <em>"기기"</em>를 빠르게 연타하여 쳐보세요. 
          그다음 최적화를 켜고(ON) 다시 입력하며 인풋창 반응 차이를 비교해 봅니다.
        </p>
      </section>

      {/* 검색창 영역 */}
      <section className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="카테고리 또는 상품명을 검색해보세요 (예: 전자기기, 기기, 코드)"
            value={inputValue}
            onChange={handleSearchChange}
          />
          {isPending && (
            <div className={styles.spinner}>
              <div className={styles.spinnerCircle}></div>
              <span>데이터 필터링 중...</span>
            </div>
          )}
        </div>
        <div className={styles.statusInfo}>
          총 10,000개 중 <strong>{filteredProducts.length.toLocaleString()}</strong> 개 상품 검색됨
        </div>
      </section>

      {/* 메인 결과 뷰 */}
      <main className={styles.resultsContainer}>
        {isPending ? (
          <div className={styles.pendingOverlay}>
            <p>🔄 최적화 검색이 백그라운드에서 연산 중입니다...</p>
          </div>
        ) : null}

        <div className={`${styles.productGrid} ${isPending ? styles.loadingGrid : ""}`}>
          {filteredProducts.slice(0, 100).map((prod) => (
            <div key={prod.id} className={styles.productCard}>
              <span className={styles.prodCat}>{prod.category}</span>
              <h4>{prod.name}</h4>
              <div className={styles.prodMeta}>
                <span className={styles.prodPrice}>{prod.price.toLocaleString()} 원</span>
                <span className={styles.prodSerial}>{prod.serial}</span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length > 100 && (
          <div className={styles.moreBanner}>
            외에 {filteredProducts.length - 100}개 상품이 더 존재합니다. (성능상 상위 100개만 출력)
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className={styles.noResults}>
            🔍 검색 조건에 일치하는 제품이 없습니다.
          </div>
        )}
      </main>

      {/* 교육 정보 가이드 */}
      <footer className={styles.educationalInfo}>
        <h3>💡 핵심 학습 포인트</h3>
        <ul>
          <li>
            <strong>UI 동시성 (Concurrency)</strong>: React는 이전까지 화면을 한 번 그릴 때 모든 컴포넌트 연산이 끝날 때까지 브라우저 쓰레드를 꽉 잡고 있었습니다. <code>useTransition</code>은 리액트에게 이 무거운 작업이 "긴급하지 않음"을 알려주어 브라우저가 키보드 입력 같은 중요한 인터랙션을 우선 반응하도록 슬롯을 쪼개줍니다.
          </li>
          <li>
            <strong>isPending의 활용</strong>: 지연 상태(<code>isPending === true</code>)일 때 스피너를 보여주거나 화면을 은은하게 오버레이하여, 유저에게 현재 백그라운드에서 정밀 작업이 진행되고 있음을 세련된 UX로 알릴 수 있습니다.
          </li>
          <li>
            <strong>useMemo와의 차이점</strong>: <code>useMemo</code>는 특정 데이터 연산의 복잡도와 연산 횟수 자체를 줄여 캐싱하는 기법인 반면, <code>useTransition</code>은 브라우저 렌더링 프레임의 우선순위(Priority)를 조절하는 기법으로 완전히 차원이 다릅니다.
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Ex18;
