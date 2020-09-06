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

### 클래스 기반 컴포넌트 작성 : vue-class-component

> 위 설명을 발표를 위해 다시 한번 이해하기 쉽게 풀어봄  

typescript를 를 vue에 원할하게 적용하기 위해서는 class 스타일로 컴포넌트를 작성할 필요가 있다.
그 이유는 무엇일까? 

[Kengo Hamasaki / Why I use vue-class-component](https://medium.com/haiiro-io/why-i-use-vue-class-component-472579a266b4)

#### Counter 컴포넌트 만들어보기

단일 파일 컴포넌트로 작성된 증감 기능이 있는 Counter 를 살펴보자.
typescript가 적용되지 않은 상태이다.

``` vue
<template>
  <div>
    <p>Count : {{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data () {
   return {
     count: 0 // count에 타입을 지정해줄 수 없다.
   }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

```

이러한 객체 구조의 컴포넌트 선언을 typescript와 함께 사용한다면 골치아픈 문제가 밣생 한다.
`data()`가 객체를 리턴하는 형태이기에 data에 타입을 할당하기 곤란하다. 
이러한 이유 때문에 vue 2.x 에서 typescript는 `vue-class-component` 를 이용하여 class 컴포넌트를 작성하는것이 권장된다.

#### 클래스 기반 Counter 컴포넌트 만들어보기

클래스 기반 컴포넌트는 `vue-property-decorator` 에서 불러들인 데코레이터를 붙여 인스턴스를 생성한다.

``` vue
<template>
  <div>
    <p>Count : {{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
// typescript 클래스 문법으로 작성 가능
export default class TSClassCount extends Vue {
  private count: number = 0; // count에 타입 지정 가능

  private increment() {
    this.count++;
  }
  private decrement() {
    this.count--;
  }
}
</script>
```

이처럼 컴포넌트를 작성하면 typescript의 class 작성 방식으로 컴포넌트를 작성할 수 있다.
 

#### 1. 

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
