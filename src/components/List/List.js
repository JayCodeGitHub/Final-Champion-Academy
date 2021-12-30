import React from "react"

const List = ({ item }) => (
  <div class="w-full lg:px-48 px-16">
    <ul class="list-disc">
      <li class="lg:text-xl text-l py-2">{item}</li>
    </ul>
  </div>
)

export default List
