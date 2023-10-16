<template>
  <div class="relative bottom-0 top-0" style="margin-top: -60px">
    <div class="shadow bg-yellow-300">
      <div
        class="container h-16 mx-auto flex items-center justify-center"
      >
        <ul class="font-semibold flex uppercase text-sky-800 items-center gap-10">
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
          <li>
            <ul>
              <li>
                <a class="hover:text-blue-600 transition-colors" href=""
                  >Olá, Ana</a
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
