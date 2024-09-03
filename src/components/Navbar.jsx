import React from "react";
import logo from "../assets/icon/mask_icon.png";
import github_logo from "../assets/icon/icons8-github.svg";

function Navbar() {
  return (
    <>
      <div class="w-1/6">
        <div class="flex w-full h-full max-w-xs p-4 bg-white rounded-md">
          <ul class="flex flex-col w-full">
            <li class="my-6">
              <a
                href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600"
              >
                <img class="w-12 h-12" src={logo} alt="" />
                <span class="flex items-center justify-center text-lg text-primary ml-2 font-medium">
                  Mask Detection
                </span>
              </a>
            </li>
            
            <li class="my-px">
              <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                Opciones
              </span>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <span class="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                </span>
                <span class="ml-3">Editar</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <span class="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="m22,10C22,4.486,17.514,0,12,0S2,4.486,2,10c0,3.94,2.29,7.354,5.609,8.983-.715.524-1.33,1.184-1.8,1.939-.395.634-.415,1.401-.054,2.052.357.643,1.009,1.026,1.745,1.026h8.982c.726,0,1.4-.396,1.759-1.032.353-.625.345-1.358-.02-1.963-.474-.786-1.104-1.473-1.843-2.016,3.325-1.627,5.621-5.044,5.621-8.989Zm-6.705,9.469c.846.501,1.562,1.21,2.07,2.053.179.296.181.644.005.955-.186.328-.518.524-.889.524H7.5c-.367,0-.692-.191-.87-.511-.183-.329-.172-.717.028-1.038.514-.824,1.227-1.516,2.064-2.003,1.027.357,2.13.552,3.278.552s2.244-.194,3.268-.549c.009.006.018.012.027.018Zm-3.295-.469c-4.962,0-9-4.038-9-9S7.038,1,12,1s9,4.038,9,9-4.038,9-9,9Zm0-14c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"></path>
                  </svg>
                </span>
                <span class="ml-3">Cámara</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <span class="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M12,17.5v4c0,.28-.22,.5-.5,.5H7c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h4v-3H4.5c-2.48,0-4.5-2.02-4.5-4.5V5.5C0,3.02,2.02,1,4.5,1h14c2.48,0,4.5,2.02,4.5,4.5v1c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-1c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5V13.5c0,1.93,1.57,3.5,3.5,3.5h7c.28,0,.5,.22,.5,.5Zm12-5v8c0,1.93-1.57,3.5-3.5,3.5h-3c-1.93,0-3.5-1.57-3.5-3.5V12.5c0-1.93,1.57-3.5,3.5-3.5h3c1.93,0,3.5,1.57,3.5,3.5Zm-1,0c0-1.38-1.12-2.5-2.5-2.5h-3c-1.38,0-2.5,1.12-2.5,2.5v8c0,1.38,1.12,2.5,2.5,2.5h3c1.38,0,2.5-1.12,2.5-2.5V12.5Z"></path>
                  </svg>
                </span>
                <span class="ml-3">Dispositivos</span>
              </a>
            </li>
           
            <li class="my-px mt-10">
              <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                Sobre mi
              </span>
            </li>
            <li class="my-px">
              <a
                href="https://x.com/Louis3f3"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <span class="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"></path>
                  </svg>
                </span>
                <span class="ml-3">Twitter</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="https://github.com/Luis3Fernando/AI_Mask_Detection.git"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <span class="flex items-center justify-center text-lg text-gray-400">
                <img src={github_logo} alt="GitHub" class="h-6 w-6" />
                </span>
                <span class="ml-3">Github</span>
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
