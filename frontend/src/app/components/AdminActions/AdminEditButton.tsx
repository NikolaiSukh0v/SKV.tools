import axios from 'axios';
interface sendData {
    data:Object,
    axiosString:string
}
async function  sendToBackend({data, axiosString}:sendData){
    try {
        const response = await axios.post(`/${axiosString}`, data)
    }catch(e){
        console.log(e)
    }
}
export default function AdminEditButton() {
    return(
        <div className="adminAddBtn-wrapper">
            <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700">
                Add
            </button>
        </div>
    )
}