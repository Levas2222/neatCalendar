<script lang="ts">
	import ModalBox from './modalBox.svelte';
</script>

<div class="mx-auto w-full h-screen bg-primarylight px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-lg">
		



		<p class="mx-auto mt-4 max-w-md text-center select-none text-textgray">
			Get started with NeatCalendar and create  customizable repetable time events with ease.
		</p>

		<form action="?/submit" class="mb-0 mt-6 space-y-4 rounded-lg p-4 
			shadow-lg sm:p-6 lg:p-8 text-textgray select-none">
			<p class="text-center text-lg font-medium">Sign in to your account</p>
			
			<div>
				<label for="email" class="sr-only">Email</label>

				<div class="relative">
					<input
						type="email"
						name="email"
						id="email"
						class="w-full bg-white rounded-lg border border-slate-800 p-4
						pe-12 text-sm shadow-sm focus:border-none"
						placeholder="Enter email"
					/>

					<span class="absolute inset-y-0 end-0 grid place-content-center px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
							/>
						</svg>
					</span>
				</div>
			</div>

			<div>
				<label for="password" class="sr-only">Password</label>

				<div class="relative">
					<input
						type="password"
						name="password"
						id="password"
						class="w-full bg-white rounded-lg border border-slate-800 p-4
						pe-12 text-sm shadow-sm focus:border-none"
						placeholder="Enter password"
					/>

					<span class="absolute inset-y-0 end-0 grid place-content-center px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</span>
				</div>
			</div>


			<button
				type="submit"
				class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm
				 font-medium text-white  border border-indigo-900 hover:bg-indigo-800"
			>
				Sign in
			</button>

			<button
				class="flex items-center justify-center w-full bg-white border border-gray-300
                 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800
                  hover:bg-gray-200 focus:outline-none "
			>
            <svg
            class="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="-0.5 0 48 48"
            version="1.1"
        >
            <title>Google-color</title> <desc>Created with Sketch.</desc> <defs />
            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                        <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                        />
                        <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                        />
                        <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                        />
                        <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                        />
                    </g>
                </g>
            </g>
        </svg>

				<span>Continue with Google</span>
                
            	</button>

			<p class="text-center text-sm text-gray-500">
				No account?
				<ModalBox />
			</p>
		</form>
	</div>
</div>
