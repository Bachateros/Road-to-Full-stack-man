<template>
  <div class="wrapper gradient">
    <header class="header">
      <div class="header__container _container">
        <div class="header__title">ToDoMonster</div>
        <div class="header__clock"></div>
      </div>
    </header>
    <main class="main">
      <div class="main__container _container">
        <div class="main__newTask newTask">
          <input type="text" placeholder="Новая задача" class="newTask__pole" />
          <button class="newTask__button">Добавить</button>
        </div>
        <div class="main__tasks tasks">
          <ul class="tasks__list"></ul>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__container _container">foot</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "appSearch",
}
</script>

<style scoped lang="scss"></style>
