<template>
  <div class="relative bottom-0 top-0" style="margin-top: -60px">
    <div class="shadow menu-background">
      <div class="container h-16 mx-auto flex items-center justify-center">
        <ul
          class="font-semibold flex uppercase text-sky-800 items-center gap-10"
        >
          <li>
            <a class="hover:text-blue-600 transition-colors" href="">Home</a>
          </li>
          <li>
            <a class="hover:text-blue-600 transition-colors" href=""
              >Como Participar</a
            >
          </li>
          <li>
            <a class="hover:text-blue-600 transition-colors" href="">Prêmios</a>
          </li>
          <li>
            <a class="hover:text-blue-600 transition-colors" href=""
              >Produtos Participantes</a
            >
          </li>
          <li>
            <a class="hover:text-blue-600 transition-colors" href=""
              >Receitas</a
            >
          </li>
          <li>
            <a class="hover:text-blue-600 transition-colors" href=""
              >Pílulas NBA</a
            >
          </li>
          <li>
            <a class="hover:text-blue-600 transition-colors" href=""
              >Ganhadores</a
            >
          </li>
          <li class="link-background text-white mx-5 my-5 py-10 px-10">
            <ul>
              <li>
                <a class="hover:text-yellow-300 transition-colors" href=""
                  >Olá, Ana <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg></a
                >
              </li>
            </ul>
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
