<template>
  <body>
    <div class="relative bottom-0 top-0 background-textured">
      <div class="shadow">
        <div class="container items-center mx-auto justify-center">
          <div class="mx-10 px-9 grid grid-rows-4 grid-flow-col gap-4">
            <div class="row-span-4">
              <p>Text</p>
              <img
                alt="Colecionáveis"
                class="colections-item-image"
                src="@/assets/img/home/logo-promo.png"
                width="578"
                height="647"
              />
            </div>
            <div class="col-span-2 items-right justify-right">
              <p>Text</p>
              <img
                alt="Unilever"
                class="logo-unilever"
                src="@/assets/img/home/logo-unilever.png"
                width="73"
                height="80"
              />
            </div>
            <div class="col-span-2 items-right justify-center">
              <button
                class="rounded-full uppercase font-black text-4xl mx-10 p-6 bg-yellow-300 hover:bg-amber-400 active:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-500"
              >
                Participe
              </button>
            </div>
            <div class="row-span-2 col-span-2 items-right justify-right">
              <img
                alt="Produtos da Home"
                class="home-products-item-image"
                src="@/assets/img/home/produtos-home.png"
                width="810"
                height="318"
              />
            </div>
          </div>
          <div class="background-external-solid">
            <div
              class="container items-center justify-center px-5 py-5 background-internal-solid rounded-3xl"
            >
              <div class="border-4 border-sky-500 rounded-3xl">
                <div class="items-left mx-auto px-5 py-5 justify-center">
                  <img
                    alt="Prêmios"
                    class="items-center mx-auto px-5 py-5 justify-center"
                    src="@/assets/img/premios/premios.png"
                    width="1021"
                    height="517"
                  />
                </div>
              </div>
            </div>
            <div class="background-external-solid">
              <h2>Como Participar</h2>
              <div class="items-center justify-center mx-10 px-5 py-5">
                <div class="grid grid-cols-4 gap-4 px-10 py-5">
                  <div class="grid">
                    <img
                      alt="Passo 1"
                      class=""
                      src="@/assets/img/como-participar/passo-1.png"
                      width="245"
                      height="106"
                    />
                  </div>
                  <div class="grid">
                    <img
                      alt="Passo 2"
                      class=""
                      src="@/assets/img/como-participar/passo-2.png"
                      width="245"
                      height="106"
                    />
                  </div>
                  <div class="grid">
                    <img
                      alt="Passo 3"
                      class="grid"
                      src="@/assets/img/como-participar/passo-3.png"
                      width="245"
                      height="106"
                    />
                  </div>
                  <div class="grid">
                    <img
                      alt="Passo 4"
                      class="logo-unilever"
                      src="@/assets/img/como-participar/passo-4.png"
                      width="245"
                      height="106"
                    />
                  </div>
                </div>
                <div class="grid grid-rows-2 content">
                  <div class="grid grid-cols-3 gap-4 px-10 py-5">
                    <div class="grid">
                      <img
                        alt="Unilever"
                        class="logo-unilever"
                        src="@/assets/img/como-participar/extra-1.png"
                        width="291"
                        height="177"
                      />
                    </div>
                    <div class="grid">
                      <img
                        alt="Unilever"
                        class="logo-unilever"
                        src="@/assets/img/como-participar/extra-2.png"
                        width="291"
                        height="177"
                      />
                    </div>
                    <div class="grid">
                      <img
                        alt="Unilever"
                        class="logo-unilever"
                        src="@/assets/img/como-participar/extra-3.png"
                        width="449"
                        height="177"
                      />
                    </div>
                  </div>
                  <div class="grid items-center justify-center px-5 py-5">
                    <div class="grid">
                      <img
                        alt="Unilever"
                        class=""
                        src="@/assets/img/como-participar/extra-4.png"
                        width="371"
                        height="177"
                      />
                    </div>
                  </div>
                </div>
                <div class="grid px-5 py-5">
                  <div class="items-center justify-center">
                    <button
                      class="rounded-full uppercase font-black text-4xl mx-10 p-6 bg-yellow-300 hover:bg-amber-400 active:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-500"
                    >
                      Participe
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="container items-center justify-center px-5 py-5 background-internal-solid rounded-3xl min-h-screen"
              >
                <div class="border-4 border-sky-500 rounded-3xl min-h-screen">
                  <div class="items-left mx-auto px-5 py-5 justify-center">
                    <h3 class="px-5 py-5">Compre, Junte e Troque</h3>
                    <div class="background-internal-solid rounded-3xl">
                      <ul
                        class="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-10" 
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
                            class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                            for="yes"
                            >Pratos</label
                          >

                          <div
                            class="absolute left-0 p-6 mt-2 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
                          >
                            <img
                              alt="Galeria de Pratos"
                              class="items-center mx-auto px-5 py-5 justify-center"
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
                            class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                            for="no"
                            >Bowls</label
                          >

                          <div
                            class="absolute left-0 p-6 mt-2 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
                          >
                            <img
                              alt="Galeria de Pratos"
                              class="items-center mx-auto px-5 py-5 justify-center"
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
                            class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                            for="yesno"
                            >Tábua</label
                          >

                          <div
                            class="absolute left-0 p-6 mt-2 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
                          >
                            <img
                              alt="Galeria de Tabuas"
                              class="items-center mx-auto px-5 py-5 justify-center"
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
              <div
                class="items-center justify-center px-5 py-5 background-external-solid"
              >
                <h3>
                  Dos dribles e enterradas memoráveis ao zerar o cronômetro,
                  <strong
                    >cada hora H na NBA fica ainda mais saborosa com
                    Hellman's.</strong
                  >
                </h3>
                <p class="font-medium text-center text-white-800">
                  Assista o vídeo abaixo:
                </p>
                <iframe
                  width="854"
                  height="480"
                  src="https://www.youtube.com/embed/KAIR1_wOJvg?si=Im_VOj-Yyabe6gli"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div
              class="items-center justify-center px-5 py-5 background-internal-solid rounded-3xl"
            >
              <h3>Produtos Participantes</h3>
              <p class="font-medium text-center text-white-800">
                Todos os squeezes da linha Hellmann's
              </p>
              <img
                alt="Linha de Produtos"
                class="premios premios-mobile"
                src="@/assets/img/home/produtos-home.png"
                width="810"
                height="318"
              />
            </div>

            <div class="items-center justify-center px-5 py-5">
              <h3>Compre agora e participe</h3>
              <nav>
                <ul>
                  <li>
                    <ul>
                      <li>
                        <img
                          alt="Grupo Pão de Açucar"
                          class="premios premios-mobile"
                          src="@/assets/img/compre-agora/pda.png"
                          width="156"
                          height="156"
                        />
                      </li>
                      <li>GPA</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <img
                          alt="Carrefour"
                          class="premios premios-mobile"
                          src="@/assets/img/compre-agora/carrefour.png"
                          width="156"
                          height="156"
                        />
                      </li>
                      <li>Carrefour</li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
