import TaskListItem from './TaskListItem';

import { PiIceCreamFill } from 'react-icons/pi';

import '../assets/css/taskList.scss';

const TaskList = ({ data, current, change }) => {
    return (
        <div className="list">
            <h2>
                <span>
                    <PiIceCreamFill />
                </span>
                아이스크림 목록
            </h2>
            <ul>
                {data.map((item) => (
                    <TaskListItem key={item.id} item={item} current={current} change={change} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
