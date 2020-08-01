import React from 'react';

export default function Counter(props) {		                // объявляем этот компонент видимым для App.js

    const rem = () => props.removeCounter(props.index);			// функция Удалить текущий счетчик
    const res = () => props.resetCounter(props.index);			// функция Обнулить текущий счетчик
// --------------------------------------------------------------------------------------------------------
    let buttonCountersPlus=[];          // пустой массив, который наполним числами от 1 до startRange
    for (let i=1; i <= props.startRange; i++) {buttonCountersPlus.push(i)}; // классический метод создания массива из значений, которые равны индексу плюс один
//  const buttonCountersPlus =[...Array(props.startRange)].map((item, index)=>index+1) // оставлено для примера как более короткий усложненный вариант предыдущего цикла
    const buttonCountersMinus = buttonCountersPlus.map((element) =>         // сложный комплексный прием, в нём выполняются сразу несколько задач:
        element*(-1)).reverse();        // 1) делается копия массива 2) значения элементов массива -> отрицательными 3) порядок элементов массива реверсируется
                                        // (смотреть таблицу приоритетов и идеологию chaining)
// --------------------------------------------------------------------------------------------------------
    return (
        <div align={"center"}>
            {buttonCountersMinus.map((element) => (        // выводим кнопки (как map по массиву) с отрицательными значениями
              <button onClick={() => props.updateCounter(props.index, element)}>{element}</button>  // универсальной функцией
            ))}
            {props.count}                                          {/* выводим значение счетчика, переданное сюда из App */}
            {buttonCountersPlus.map((element) => (                 // выводим кнопки (как map по массиву) с положительными значениями
              <button onClick={() => props.updateCounter(props.index, element)}>{element}</button>  // универсальной функцией
            ))}
            <button onClick={rem}>Remove current counter</button>  {/* по нажатию этой кнопки вызываем функцию Удалить текущий счетчик */}
            <button onClick={res}>Reset current counter</button>   {/* по нажатию этой кнопки вызываем функцию Обнулить текущий счетчик */}
        </div>
    );
}
