<script>
    let name = '';
    let description = '';
    let tags = '';
    let toggle = false;
  </script>
  
  <div class="h-screen w-screen flex items-center justify-center bg-secondarydark backdrop-blur">
    <div class="rounded-lg p-6 bg-whitish shadow-lg w-5/6 h-5/6 ">
      <div class="mb-4">
        <input type="text" class="w-full px-3 py-2 border rounded-md" placeholder="Name" bind:value={name} />
      </div>
      <div class="mb-4">
        <textarea class="w-full px-3 py-2 border rounded-md" placeholder="Description" bind:value={description}></textarea>
      </div>
      <div class="mb-4">
        <input type="text" class="w-full px-3 py-2 border rounded-md" placeholder="Tags" bind:value={tags} />
      </div>
      <div class="mb-4">
        <label class="flex items-center space-x-2">
          <span>Toggle</span>
          <input type="checkbox" class="form-checkbox" bind:checked={toggle} />
        </label>
      </div>
    </div>
  </div>
  <style>
    /* Add custom styles here */
  </style>