import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
export default function FormForPost() {
    return (
        <>
    <div >
  <div class="md:grid md:grid-cols-2 md:gap-6 w-4/5 m-auto">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST" >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6 items-end">
              <div class="col-span-6 sm:col-span-5">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Add post</label>
                <input  type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-1 ">
                  <button className=' w-full h-11  border border-transparent shadow-xm text-xl font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 '>
                        Post
                  </button>
              </div>

            </div>
          </div>
          
            

         
        
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    )
}
