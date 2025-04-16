# @Hong-JunHyeok/use-feature-flag

`@Hong-JunHyeok/use-feature-flag`는 리액트 환경에서 피쳐 플래깅을 관리할 수 있는 라이브러리입니다.

## 미리보기

![Preview Image](https://github.com/user-attachments/assets/2c1c9855-1758-4961-b424-2ace7ef15463)

애플리케이션 전역에 걸쳐 플래그의 상태를 context 기반으로 공유할 수 있습니다.

또한 개발 중에는 활성화된 플래그를 실시간으로 확인하고 디버깅할 수 있는 도구도 함께 제공됩니다.

`@Hong-JunHyeok/use-feature-flag`는 점진적으로 서비스의 기능을 오픈하고자 할 때 매우 효과적인 도구입니다.

## 설정

`@Hong-JunHyeok/use-feature-flag`를 설정하기 위해 앱 최상단부에 `FeatureFlagProvider`를 매핑해주세요.

```tsx
createRoot(document.getElementById("root")!).render(
  <FeatureFlagProvider values={[]}>
    <App />
  </FeatureFlagProvider>
);
```

FeatureFlagProvider 내부에 values에는 어떤 플래그 값을 전달할 것인지에 대한 값을 전달해주기만 하면 됩니다.

```tsx
const flags: FlagValue[] = [
  {
    name: "유저 목록 조회",
    key: "SHOW_USER_LIST",
    active: false,
    description:
      "홈 섹션에서 유저 목록을 조회하기 위해서 사용되는 플래그 값입니다.",
  },
  {
    name: "배너 노출",
    key: "SHOW_BANNER",
    active: true,
    description: "홈 화면에서 배너가 노출되기 위한 플래그 값입니다.",
  },
];

...
<FeatureFlagProvider values={flags}>
...
```

`FlagValue` 타입을 요소로 하는 배열을 전달해주어야 하는데 각 속성값에 대한 설명입니다.

- name : 해당 플래그를 알아볼 수 있도록 이름 (별칭)을 지정합니다.
- key : 실질적으로 코드상에서 저장되고 사용될 식별자를 지정합니다. **(중복되지 않도록 설정해주세요)**
- active : 플래그 값에 대한 `On / Off` 상태를 표현합니다. 이는 초기값으로 설정되며 추후 런타임때 변경될 수 있습니다.
- description : 이름만으로 해당 플래그에 대한 설명이 부족할 때 추가 기술합니다.

## 디버깅 모드

프로덕션 환경이 아닌 개발 환경일 경우 Flag 값들을 관리하는 디버깅 콘솔을 필요로 할 수 있습니다. `@Hong-JunHyeok/use-feature-flag`에서는 해당 기능을 손쉽게 설정할 수 있습니다.

`FeatureFlagProvider` 에 `useDebugMode` Props를 `true`로 설정해기만 하면 됩니다.

```tsx
<FeatureFlagProvider values={flags} useDebugMode>
  <App />
</FeatureFlagProvider>
```

이제 화면 하단부에 콘솔을 토글할 수 있는 버튼이 생성되고, 클릭하면 플래그의 ON/OFF 정보들을 확인할 수 있습니다. (물론 플래그 값 제어도 가능합니다)

![Image](https://github.com/user-attachments/assets/4de952ea-bc08-47d1-8b96-2a03929c1cb0)
