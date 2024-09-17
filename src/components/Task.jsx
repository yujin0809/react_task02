import { useEffect, useState } from 'react';
import '../assets/css/task.scss';
import TaskGallery from './TaskGallery';
import TaskList from './TaskList';

const dataList = [
    { id: 1, title: '두바이스타일 초코 통통', desc: '고소한 피스타치오와 초콜릿의 고급스러운 만남', imgUrl: 'images/img01.png' },
    { id: 2, title: '피치 Pang 망고 Pang', desc: '상큼한 피치 샤베트에 망고향이 팡팡 터지는 버블이 가득!', imgUrl: 'images/img02.png' },
    { id: 3, title: '나주배 소르베', desc: '나주배를 그대로 갈아만든 시원하고 달콤한 나주배 소르베', imgUrl: 'images/img03.png' },
    { id: 4, title: '소금 우유 아이스크림', desc: '부드러운 우유 맛 아이스크림 속에 깊은 단 맛을 끌어내는 소금 아이스크림', imgUrl: 'images/img04.png' },
    { id: 5, title: '봉쥬르, 마카롱', desc: '부드러운 마스카포네 아이스크림과 마카롱, 초콜릿의 달콤한 만남!', imgUrl: 'images/img05.png' },
];

const Task = () => {
    const [data, setData] = useState(dataList);
    const [current, setCurrent] = useState(data[0]);
    const [cnt, setCnt] = useState(0);

    const prev = () => {
        setCnt(cnt > 0 ? cnt - 1 : data.length - 1);
    };
    const next = () => {
        setCnt(cnt < data.length - 1 ? cnt + 1 : 0);
    };

    const change = (id) => {
        setCnt(id - 1);
    };
    useEffect(() => {
        setCurrent(data[cnt]);
    }, [cnt]);

    return (
        <div className="wrap">
            <TaskGallery data={data} current={current} setCurrent={setCurrent} next={next} prev={prev} change={change} />
            <TaskList data={data} current={current} change={change} />
        </div>
    );
};

export default Task;
