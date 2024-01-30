import React, {useState} from "react";

const LocalSt = () => {
    const [item, setItem] = useState("")
    const addItem = () => {
        localStorage.setItem("Text", item)
    }
    const removeItem = () => {
        localStorage.removeItem("Text")
    }
    const clearLocalData = () => {
        localStorage.clear()
    }
    return (
        <div>
            <h1>LocalStorage in the React</h1>
            <input type="text" placeholder="Enter the item..." value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={addItem}>Add item</button>
            <button onClick={removeItem}>Remove item</button>
            <button onClick={clearLocalData}>Clear</button>
            {localStorage.getItem("Text") && (
                <div>
                    <p>{localStorage.getItem("Text")}</p>
                </div>
            )}
        </div>
    )
}
export default LocalSt