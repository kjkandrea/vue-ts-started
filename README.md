# vue-ts-started

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### lint 체크 및 수정
```
vue-cli-service lint
```

## vue-cli 인스톨 설정

`?` Check the features needed for your project: 
**TS, Router, Vuex, CSS Pre-processors, Linter**

`?` Use class-style component syntax?
**Yes**

`?` Use Babel alongside TypeScript (required for modern mode, auto-detected polyfi
lls, transpiling JSX)?
**No**

`?` Use history mode for router? (Requires proper server setup for index fallback 
in production)
**Yes**

`?` Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported 
by default): 
**Sass/SCSS (with node-sass)**

`?` Pick a linter / formatter config: 
**TSLint**

`?` Pick additional lint features: 
**Lint on save**

`?` Where do you prefer placing config for Babel, ESLint, etc.? 
**In dedicated confi
g files**

## Decorator?

어노테이션이 아닙니다. 그냥 함수 입니다.

## Class based component

[TOAST UI : 타입스크립트에서 Vue 컴포넌트를 개발하는 방법](https://ui.toast.com/weekly-pick/ko_20190327/#vueextend)

> 이 밑으로는 'TOAST UI : 타입스크립트에서 Vue 컴포넌트를 개발하는 방법' 를 요약한 내용입니다.

타입스크립트를 Vue 컴포넌트에 적용하는 방법에는 두 가지 방법이 있다. 
`Vue.extend` 를 사용하는 방법, `Class based component`를 사용하는 방법이 있다.
왜 `Class based component`를 사용해야 할까? 

### Vue.extend 방식 살펴보기

`Vue.extend` 는 타입스크립트를 사용하지 않을 때와 비슷하다.

``` typescript
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      message: 'hello, Vue + Typescript',
      todos: []
      newTodo: ''
    }
  },
  methods: {
    onEnter(): void {
     this.todos(this.newTodo)
    },
    addTodo(title: string): void {
      this.todos.push(title)
    }
  }
});
```

허나 이 방식은 다음과 같은 문제를 야기한다.

1. 객체 형태로 컴포넌트를 정의할 때 props 의 타입으로 타입스크립트의 타입을 사용할 수 없다
2. Vuex 맵핑핼퍼를 타입스크립트에서 사용하면 메서드나 데이터가 모두 String값과 기타 맵핑핼퍼 옵션으로 세탁되어 버리기 때문에 타입스크립트는 해당 멤버가 컴포넌트에 존재한다고 추론할 수 없다.

이러한 문제 때문에 `Class based component` 를 사용한다.

### Class based component 살펴보기

클래스 기반의 Vue 컴포넌트는 Vue 커뮤니티에서도 옳은 해답이 나왔다기보다는 현재 해답을 찾아가는 과정에 있다.
아마도 클래스 기반 컴포넌트는 타입스크립트가 아니었다면 전혀 고려하지 않았을 것이다.

클래스 기반 컴포넌트의 가장 베이직한 형태는 다음과 같다.

``` typescript
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  public message: string = '';
}
```

### @Component

### @Prop

### @Watch

### @Emit

### @Provide/inject

### @Model

### @Mixin

[mixin-example](https://github.com/kjkandrea/mixin-example)

## Vuex

### vuex-module-decorators

```
npm install vuex-module-decorators
```

doc : [github: vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators)

### vuex-class

```
npm install vuex-class
```
