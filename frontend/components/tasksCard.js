import ReactMarkdown from "react-markdown";
import Label from "./label";

export function TasksCard({tasks}) {
    return (
        <table className={"table-fixed text-sm my-4 p-2 w-full text-left align-text-top editorial"}>
            <colgroup>
                <col className={"w-1/4"}/>
                <col className={"w-3/4"}/>
                <col/>
            </colgroup>
            <thead>
            <tr className={""}>
                <th className={"border-collapse border border-white"}>Name</th>
                <th className={"border-collapse border border-white"}>Details</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task, i) => (
                <tr key={i}>
                    <td className={"border-collapse border border-white"}>
                        <ReactMarkdown>{task.name}</ReactMarkdown>
                        <div className={"mt-2"}><Label label={task.status} key={i} bgColor={task.status} txtColor={'text-primary'}/></div>
                    </td>
                    <td className={"border-collapse border border-white"}>
                        <ReactMarkdown>{task.content}</ReactMarkdown></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
