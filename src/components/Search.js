import { useState } from "react"

export default function Search({ searchText }) {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full w-sm">
                <div className="flex items-center border-b border-b-2 border-black py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search Image Term..." />
                    <button className="flex-shrink-0 bg-black hover:bg-gray-500 border-gray-800 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
                </div>
            </form>

        </div>
    )
}