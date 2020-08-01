import React, {useState} from 'react';			// подключение React’а и обязательно хука useState
import Counter from "./Counter.js";				// будем подключать компонент Counter

// сделано с огромной помощью r0mka (Roman Nikolaenkov - https://pasvus.slack.com/team/U0168FT0PNG)

export default function App() {					// объявляем этот компонент App видимым для index.js

  const [counters, setCounters] = useState([1,2,3]);	 // используем хук useState для обновления
                                                                 // массива счетчиков
// --------------------------------------------------------------------------------------------------------
  const addCounter = () => {							         // функция Добавить новый счетчик
  const randomNumber = Math.round(Math.random() * 10);		 // создаём значение нового счетчика с помощью
                                                                 // псевдогенератора случайных чисел
   setCounters([...counters, randomNumber]) };			     // добавляем новый счетчик путем и делаем
// --------------------------------------------------------------------------------------------------------
  const resetAll = () => {				            			 // функция Обнулить все счетчики
    setCounters([...counters].map(element => 0)) };			     // ререндеринг массива счетчиков
// --------------------------------------------------------------------------------------------------------
  const removeCounter = (index) => {				    		 // функция Удалить текущий счетчик
    let newCounters = [...counters];					    	 // делаем копию массива
    newCounters.splice(index, 1);						 // удаляем элемент массива счетчиков
                                                                 // https://learn.javascript.ru/array-methods :
                                                                 // array.splice(index, 1); // начиная с позиции index, удалить 1 элемент
    setCounters(newCounters) };					            	 // ререндеринг массива счетчиков
// --------------------------------------------------------------------------------------------------------
  const resetCounter = (index) => {						         // функция Обнулить текущий счетчик
    let newCounters = [...counters]; 	        				 // делаем копию массива
    newCounters[index] = 0;						            	 // значение текущего счетчика в ноль
    setCounters(newCounters) };					            	 // ререндеринг массива счетчиков
// --------------------------------------------------------------------------------------------------------
const updateCounter = (index, value) => {                        // вместо двух функций plusOne и minusOne создаем универсальную функцию
    let newCounters = counters.slice();                          // делаем копию массива counters классическим методом
    newCounters[index] = newCounters[index] + value;             // к элементу массива counters с индексом index прибавляем (а так как value могут быть и отрицательными - отнимаем) value
    setCounters(newCounters);}                                   // ререндеринг массива счетчиков
// --------------------------------------------------------------------------------------------------------
    const [startRange, setStartRange] = useState(5);    // задаем переменную "какой диапазон", функцию по её обслуживанию и начальное значение диапазона
    const minusRange = () => {setStartRange(startRange-1)}; // после нажатия minusRange - размер диапазона уменьшаем   на 1 и ререндеринг
    const plusRange  = () => {setStartRange(startRange+1)}; // после нажатия plusRange  - размер диапазона увеличиваем на 1 и ререндеринг
// --------------------------------------------------------------------------------------------------------
  return (
      <div className={"App"} align={"center"}>          {/* ядро кода, выводим по центру */}

      <button disabled={startRange<=1} onClick={minusRange}>Уменьшить диапазон</button> {/* выводим текст на кнопке, при нажатии на которую выполняем функцию minusRange */}
                                                        {/* опция "disabled" - параметр, делающий  кнопку недоступной при булевом true в {} */}
      Текущий диапазон: {startRange}                    {/* Выводим текст и значение размера диапазона */}
      <button disabled={startRange>=10} onClick={plusRange}>Увеличить диапазон</button> {/* выводим текст на кнопке, при нажатии на которую выполняем функцию plusRange */}
                                                        {/* опция "disabled" - параметр, делающий  кнопку недоступной при булевом true в {} */}

          {counters.map((element, index) => (     // перебираем массив counters методом map
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map :
// Метод map вызывает переданную функцию callback один раз для каждого элемента, в порядке их появления и
// конструирует новый массив из результатов её вызова. Функция callback вызывается только для индексов массива,
// имеющих присвоенные значения, включая undefined. Она не вызывается для пропущенных элементов массива (то есть
// для индексов, которые никогда не были заданы, которые были удалены или которым никогда не было присвоено
// значение.
// Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом,
// по которому осуществляется проход.

            <Counter                                // вызвать Counter, передать props
                count={element}                     // передать значение счетчика
                key={index}                         // внутренний id, здесь равен index'у
                index={index}                       // индекс элемента
                updateCounter={updateCounter}       // адрес функции Универсальная функция обработки значения счетчика
                removeCounter={removeCounter}       // адрес функции Удалить текущий счетчик
                resetCounter={resetCounter}         // адрес функции Обнулить текущий счетчик
                startRange={startRange}             // передаем в Counter значение размера диапазона
            />
        ))}
        <hr/>
        <button onClick={addCounter}>Create new counter</button> {/* вызов функции Добавить новый счетчик */}
        <button onClick={resetAll}>Reset all counters</button>   {/* вызов функции Обнулить все счетчики */}
      </div>

  )
};
