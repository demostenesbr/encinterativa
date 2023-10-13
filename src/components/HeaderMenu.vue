<template>
  <div class="relative bottom-0 top-0">
    <div class="shadow bg-white">
      <div
        class="container text-blue-500 h-16 mx-auto px-5 flex items-center justify-center"
      >
        <ul class="flex items-center gap-5">
          <li>
            <a class="hover:text-cyan-500 transition-colors" href="">Link 1</a>
          </li>
          <li>
            <a class="hover:text-cyan-500 transition-colors" href="">Link 2</a>
          </li>
          <li>
            <a class="hover:text-cyan-500 transition-colors" href="">Link 3</a>
          </li>
          <li>
            <a class="hover:text-cyan-500 transition-colors" href="">Link 4</a>
          </li>
          <li>
            <a class="hover:text-cyan-500 transition-colors" href="">Link 5</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  props: {
    msg: String,
  },
};
</script>
