import fsPromises from "fs/promises"
import path from "path"

interface Item {
    id: number
    first_name: string
    last_name: string
    email: string
    gender: string
    ip_address: string
}

async function getData() {
    const filePath = path.join(process.cwd(), "/src/MOCK_DATA.json")
    const jsonData = await fsPromises.readFile(filePath)
    const objectData: Item[] = JSON.parse(jsonData.toString())
    return objectData
}

export default async function Data() {
    const data: Item[] = await getData()

    const renderData = (data: Item[]) => {
        return data.map((item: Item) => {
            return (
                <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.ip_address}</td>
                </tr>
            )
        })
    }

    return <table>{renderData(data)}</table>
}
