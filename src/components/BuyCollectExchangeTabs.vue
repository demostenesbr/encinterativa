<template>
  <div
    class="items-center justify-center px-5 py-5 background-internal-solid rounded-3xl min-h-screen"
  >
    <div class="border-4 border-sky-500 rounded-3xl min-h-screen">
      <div class="items-left mx-auto px-5 py-5 justify-center w-1/2">
        <p class="text-yellow-300 uppercase text-3xl my-5 px-5 py-0">Compre, Junte e Troque</p>
        <div class="background-external-solid rounded-3xl px-5 py-1">
          <ul
            class="mx-auto uppercase font-semibold flex uppercase text-blue-600 grid grid-cols-3 gap-x-5 px-10"
          >
            <li class="">
              <input
                class="peer sr-only"
                type="radio"
                value="yes"
                name="answer"
                id="yes"
                checked
              />
              <label
                class="flex justify-center cursor-pointer bg-transparent rounded-full text-white py-2 px-4 hover:bg-gray-50 hover:text-blue-600 focus:outline-none hover:bg-yellow-300 peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 peer-checked:bg-yellow-300 peer-checked:text-blue-900 transition-all duration-500 ease-in-out"
                for="yes"
                >Pratos</label
              >

              <div
                class="absolute left-0 p-6 mt-2 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
              >
                <img
                  alt="Galeria de Pratos"
                  class="items-center mx-auto px-10 py-0 justify-center"
                  src="@/assets/img/galeria/galeria-pratos.png"
                  width="797"
                  height="521"
                />
              </div>
            </li>

            <li class="">
              <input
                class="peer sr-only"
                type="radio"
                value="no"
                name="answer"
                id="no"
              />
              <label
                class="flex justify-center cursor-pointer bg-transparent rounded-full text-white py-2 px-4 hover:bg-gray-50 hover:text-blue-600 focus:outline-none hover:bg-yellow-300 peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 peer-checked:bg-yellow-300 peer-checked:text-blue-900 transition-all duration-500 ease-in-out"
                for="no"
                >Bowls</label
              >
              <div
                class="absolute left-0 p-6 mt-2 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
              >
                <img
                  alt="Galeria de Pratos"
                  class="items-center mx-auto px-10 py-0 justify-center"
                  src="@/assets/img/galeria/galeria-bowls.png"
                  width="797"
                  height="521"
                />
              </div>
            </li>

            <li class="">
              <input
                class="peer sr-only"
                type="radio"
                value="yesno"
                name="answer"
                id="yesno"
              />
              <label
                class="flex justify-center cursor-pointer bg-transparent rounded-full text-white py-2 px-4 hover:bg-gray-50 hover:text-blue-600 focus:outline-none hover:bg-yellow-300 peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 peer-checked:bg-yellow-300 peer-checked:text-blue-900 transition-all duration-500 ease-in-out"
                for="yesno"
                >Tábua</label
              >

              <div
                class="absolute left-0 p-6 mt-2 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
              >
                <img
                  alt="Galeria de Tabuas"
                  class="items-center mx-auto px-10 py-0 justify-center"
                  src="@/assets/img/galeria/galeria-tabua.png"
                  width="797"
                  height="521"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
