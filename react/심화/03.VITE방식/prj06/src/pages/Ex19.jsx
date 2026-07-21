import { useState, useRef, useEffect } from "react";
import styles from "./Ex19.module.css";

// 라이선스 등급별 해제 기능 정의
const LICENSES = {
  BASIC: {
    grade: "Basic Starter",
    features: ["기본 온라인 강의 시청", "일반 Q&A 게시판 이용"],
    color: "#64748b",
  },
  PREMIUM: {
    grade: "Premium Advanced",
    features: ["모든 온라인 강의 시청", "일반 Q&A 게시판 이용", "1:1 실시간 멘토링 매칭", "AI 코딩 헬퍼 어시스턴트"],
    color: "#a855f7",
  },
  ULTIMATE: {
    grade: "Ultimate Developer Enterprise",
    features: [
      "모든 온라인 강의 시청",
      "일반 Q&A 게시판 이용",
      "1:1 실시간 멘토링 매칭",
      "AI 코딩 헬퍼 어시스턴트",
      "무제한 클라우드 개발 샌드박스",
      "취업 매칭 및 포트폴리오 첨삭권",
    ],
    color: "#f59e0b",
  },
};

// 모의 활성화 코드 정의 (실제 학생들이 테스트할 코드)
const MOCK_CODES = {
  "PKNU-2026-BASE-PASS": "BASIC",
  "PKNU-2026-PREM-PLUS": "PREMIUM",
  "PKNU-2026-GOLD-ULTI": "ULTIMATE",
};

function Ex19() {
  // 1. 활성화 단계 상태 (Step 1: 입력, Step 2: 활성화 진행중, Step 3: 완료)
  const [step, setStep] = useState(1);

  // 2. 활성화된 라이선스 등급 정보 (null, BASIC, PREMIUM, ULTIMATE)
  const [activeGrade, setActiveGrade] = useState(null);

  // 3. 4개 분할 입력상자 상태
  const [keySegments, setKeySegments] = useState(["", "", "", ""]);

  // 4. 활성화 로딩 상태 메시지 제어
  const [loadingStage, setLoadingStage] = useState(0);
  const loadingMessages = [
    "인증 서버에 연결 중...",
    "활성화 코드 무결성 해시 대조 중...",
    "학습 라이선스 토큰 생성 중...",
    "프리미엄 기능 권한 맵핑 중...",
  ];

  // 5. 각 입력상자에 포커스를 수동 이동시키기 위한 Ref 배열
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // 6. 분할된 입력상자 값 변경 처리 함수 (Auto-Focus 이동 로직 구현)
  const handleInputChange = (index, value) => {
    // 알파벳 대문자와 숫자, 대시 기호만 허용 (보안 포맷팅)
    const formattedVal = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();

    const newSegments = [...keySegments];
    newSegments[index] = formattedVal.slice(0, 4); // 최대 4글자 제한
    setKeySegments(newSegments);

    // 4글자가 다 차면 자동으로 다음 입력칸으로 포커스 이동 (가장 앞선 UX 기법)
    if (formattedVal.length >= 4 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  // 백스페이스 입력 시 이전 칸으로 복귀하는 로직
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !keySegments[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  // 7. 활성화 버튼 클릭 시 작동하는 인증 프로세스 (부수 효과 시뮬레이션)
  const handleActivate = () => {
    const fullCode = keySegments.join("-");
    
    // 코드 체크
    const matchingGrade = MOCK_CODES[fullCode];

    if (!matchingGrade) {
      alert("⚠️ 입력하신 활성화 코드가 올바르지 않습니다!\n(힌트: 안내 카드에 적힌 실습 코드를 정확히 써주세요.)");
      return;
    }

    // 단계 2: 활성화 진행 화면으로 전환
    setStep(2);
    setLoadingStage(0);
  };

  // 활성화 처리 시 타이머를 통한 다단계 서버 통신 연출 효과
  useEffect(() => {
    if (step !== 2) return;

    const interval = setInterval(() => {
      setLoadingStage((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          // 마지막 단계 도달 시 완료 단계로 전환
          clearInterval(interval);
          const fullCode = keySegments.join("-");
          setActiveGrade(MOCK_CODES[fullCode]);
          setStep(3);
          return prev;
        }
      });
    }, 1200); // 각 통신 과정별 1.2초 대기 연출

    return () => clearInterval(interval);
  }, [step]);

  // 활성화 초기화 (처음으로 돌아가기)
  const handleReset = () => {
    setKeySegments(["", "", "", ""]);
    setActiveGrade(null);
    setStep(1);
  };

  // 전체 코드 조합 문자열
  const currentFullCode = keySegments.join("-");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>수업용 예제 #19</span>
        <h1>19. Product Activation (정밀 UI 제어와 상태 기계)</h1>
        <p className={styles.description}>
          다중 입력상자(Multi-Input) 제어, Ref를 통한 포커스 흐름 제어, 로딩 시퀀스 상태 머신을 사용한 
          <strong> 소프트웨어 라이선스 활성화(Activation) 인터랙션</strong> 모범 사례를 학습합니다.
        </p>
      </header>

      {/* 실습용 힌트 카드 */}
      <section className={styles.hintCard}>
        <h3>💡 활성화 실습용 개발자 코드</h3>
        <p>프로그램이 올바른 라이선스를 해제할 수 있도록 아래 키셋을 그대로 입력창에 입력해 보세요.</p>
        <div className={styles.hintGrid}>
          <div className={styles.hintRow} onClick={() => setKeySegments(["PKNU", "2026", "BASE", "PASS"])}>
            <code>PKNU-2026-BASE-PASS</code> <span>➡️ 베이직 스타터 해제</span>
          </div>
          <div className={styles.hintRow} onClick={() => setKeySegments(["PKNU", "2026", "PREM", "PLUS"])}>
            <code>PKNU-2026-PREM-PLUS</code> <span>➡️ 프리미엄 권한 해제</span>
          </div>
          <div className={styles.hintRow} onClick={() => setKeySegments(["PKNU", "2026", "GOLD", "ULTI"])}>
            <code>PKNU-2026-GOLD-ULTI</code> <span>➡️ 얼티메이트 최고등급 해제</span>
          </div>
        </div>
      </section>

      {/* 활성화 메인 위젯 */}
      <main className={styles.widget}>
        {/* 상단 스텝 프로그레스바 */}
        <div className={styles.stepsBar}>
          <div className={`${styles.stepIndicator} ${step >= 1 ? styles.activeStep : ""}`}>
            <span className={styles.stepNum}>1</span> 입력
          </div>
          <div className={styles.stepConnector}></div>
          <div className={`${styles.stepIndicator} ${step >= 2 ? styles.activeStep : ""}`}>
            <span className={styles.stepNum}>2</span> 검증
          </div>
          <div className={styles.stepConnector}></div>
          <div className={`${styles.stepIndicator} ${step >= 3 ? styles.activeStep : ""}`}>
            <span className={styles.stepNum}>3</span> 활성화 완료
          </div>
        </div>

        {/* STEP 1: 활성화 키 입력창 */}
        {step === 1 && (
          <div className={styles.stepBody}>
            <h2>🔑 활성화 라이선스 키 입력</h2>
            <p className={styles.stepDesc}>보유하고 계신 16자리 강좌 및 소프트웨어 활성화 코드를 입력해 주세요.</p>

            <div className={styles.inputArea}>
              {keySegments.map((segment, idx) => (
                <div key={idx} className={styles.inputWrapper}>
                  <input
                    ref={inputRefs[idx]}
                    type="text"
                    className={styles.keyInput}
                    placeholder="0000"
                    value={segment}
                    onChange={(e) => handleInputChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    maxLength={4}
                  />
                  {idx < 3 && <span className={styles.separator}>-</span>}
                </div>
              ))}
            </div>

            <div className={styles.btnWrapper}>
              <button
                className={styles.activateBtn}
                onClick={handleActivate}
                disabled={currentFullCode.length < 19}
              >
                라이선스 활성화 검증 시작 ⚡
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: 검증 및 통신 중 연출 화면 */}
        {step === 2 && (
          <div className={styles.stepBody}>
            <div className={styles.loaderBox}>
              <div className={styles.radarLoader}>
                <div className={styles.radarPing}></div>
                <div className={styles.radarDot}>🔑</div>
              </div>
              <h2>라이선스 활성화 진행 중</h2>
              <div className={styles.loadingProgressContainer}>
                <div 
                  className={styles.loadingProgressBar}
                  style={{ width: `${((loadingStage + 1) / loadingMessages.length) * 100}%` }}
                ></div>
              </div>
              <p className={styles.stageMessage}>{loadingMessages[loadingStage]}</p>
            </div>
          </div>
        )}

        {/* STEP 3: 활성화 완료 및 등급별 해제 기능 대시보드 */}
        {step === 3 && activeGrade && (
          <div className={styles.stepBody}>
            <div className={styles.successIcon}>🎉</div>
            <h2 className={styles.successTitle}>활성화 완료!</h2>
            <p className={styles.successDesc}>성공적으로 계정에 라이선스가 바인딩되었습니다.</p>

            {/* 등급 요약 박스 */}
            <div 
              className={styles.gradeBox} 
              style={{ borderColor: LICENSES[activeGrade].color }}
            >
              <span 
                className={styles.gradeBadge} 
                style={{ backgroundColor: LICENSES[activeGrade].color }}
              >
                {LICENSES[activeGrade].grade}
              </span>
              <h3>제공되는 활성 혜택 목록:</h3>
              <ul className={styles.featureList}>
                {LICENSES[activeGrade].features.map((feat, i) => (
                  <li key={i}>✅ {feat}</li>
                ))}
              </ul>
            </div>

            <div className={styles.btnWrapper}>
              <button className={styles.resetBtn} onClick={handleReset}>
                🔄 다른 키 활성화 해보기
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 학습 가이드 */}
      <footer className={styles.educationalInfo}>
        <h3>💡 핵심 학습 포인트</h3>
        <ul>
          <li>
            <strong>Focus Routing & useRef</strong>: 개별적으로 렌더링된 4개의 Input 상자를 <code>useRef</code> 배열로 가리키고 조건식(4자리 입력 완료)을 감지해 다음 노드로 <code>.focus()</code> 명령을 내리는 전형적인 제어 컴포넌트 핵심 테크닉을 배웁니다.
          </li>
          <li>
            <strong>Regex 포맷 매스킹</strong>: 사용자가 입력하는 무작위 입력 값 중에서 영어 대소문자와 숫자만 걸러내고 무조건 대문자로 치환해 입력 포맷의 데이터 신뢰성을 보장하는 법을 익힙니다.
          </li>
          <li>
            <strong>State Machine (상태 전이 모델)</strong>: 단순 Boolean 값을 넘어 1단계에서 3단계로 명확하게 상태가 전환(Transition)되며 컴포넌트의 화면 뼈대 자체를 바꾸는 상태 제어 패턴을 이해합니다.
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Ex19;
