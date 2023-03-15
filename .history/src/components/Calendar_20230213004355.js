import React from 'react';
// import './index.less';

function Calendar(props) {
  // 从父页面传递过来的参数
  const {
    // 日历当前需展示的年【未传则展示当前年】
    year,
    // 日历当前需展示的月【未传则展示当前月】
    month,
  } = props;

  /**
   * 计算某一日期对应一周的日期（比如：getWeekDataList('2023-01-18'); 结果为：['1.16', '1.17', '1.18', '1.19', '1.20', '1.21', '1.22']）
   * @param {String} data 日期【格式: 年-月-日（xxxx-xx-xx)（比如：'2023-01-18'）】
   * @returns 一个含周一到周日日期的数组
   */
  const getWeekDataList = (data) => {
    // 根据日期获取本周周一~周日的年-月-日
    const weekList = [];
    const date = new Date(data);
    // 判断本日期是否为周日，获取本周一日期
    if (date.getDay() === 0) {
      date.setDate(date.getDate() - 6);
    } else {
      date.setDate(date.getDate() - date.getDay() + 1);
    }
    const myMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1); // 月
    const myDate = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate(); // 日
    weekList.push(parseInt(myMonth) + '.' + parseInt(myDate));
    // 获取周二以后日期
    for (let i = 0; i < 6; i++) {
      date.setDate(date.getDate() + 1);
      const myMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1); // 月
      const myDate = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate(); // 日
      weekList.push(parseInt(myMonth) + '.' + parseInt(myDate));
    }
    // console.log('一个含周一到周日日期的数组', weekList);
    return weekList;
  };

  // 自定义参数
  const d = new Date(),
    curYear = d.getFullYear(), // 当前年
    curMonth = d.getMonth() + 1 < 9 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1), // 当前月【字符串型】
    _curMonth = parseInt(curMonth), // 当前月【数值型】
    curDate = d.getDate() < 9 ? '0' + d.getDate() : '' + d.getDate(), // 当前日【字符串型】
    _curDate = parseInt(curDate), // 当前日【数值型】
    weekArr = ['日', '一', '二', '三', '四', '五', '六']; // 数组-星期

  // 渲染日历行内容
  const renderDays = (row) => {
    /** 签到状态处理【1: 状态-过去 未签到, 2: 状态-已签到, 3: 状态-将来 未签到】 */
    const statusMap = {
      // 状态-过去 未签到
      1: <p className="status status1"></p>,
      // 状态-已签到
      2: <p className="status status2"></p>,
      // 状态-将来 未签到
      3: <p className="status status3"><span>+2</span></p>,
    }

    /** 初始化年月日相关滴数据 */
    const currentYear = year || new Date().getFullYear(), // 父页面传过来的年 || 当前年【静态值】
      currentMonth = month || new Date().getMonth() + 1, // 父页面传过来的月 || 当前月【静态值】
      _month = currentMonth, // 动态值 等于_month，做加1、减1处理
      days = new Date(currentYear, currentMonth, 0).getDate(), // 获取某年月对应的天数
      idx = new Date(`${currentYear}/${currentMonth}/01`).getDay(), // 获取某年月第一天对应的星期（0-6）【注意：这里需要用'/'进行分割，避免ios兼容问题（ios的Date对象不支持 yyyy-MM-dd 的格式）】
      nextIdx = new Date(`${currentYear}/${currentMonth}/${days}`).getDay(); // 获取某年月最后一天对应的星期（0-6）【注意：这里需要用'/'进行分割，避免ios兼容问题（ios的Date对象不支持 yyyy-MM-dd 的格式）】
    console.log('父页面传过来的年 || 当前年', currentYear);
    console.log('父页面传过来的月 || 当前月', currentMonth);
    console.log('某年月对应的天数', days);
    console.log('某年月第一天对应的星期（0-6）', idx);
    console.log('某年月最后一天对应的星期（0-6）', nextIdx);

    /** 【重要】日期数组数据处理 */
    const dateArr = new Array(42).fill(0); // 自定义一个数据为0的42位数组

    let lastMonth = undefined; // 上一个月月份
    let nextMonth = undefined; // 下一个月月份
    /** 1、处理上一个月月份 */
    if (currentMonth == 1) {
      lastMonth = 12;
    } else {
      lastMonth = _month - 1;
    }
    console.log('上一个月月份', lastMonth);
    /** 2、处理下一个月月份 */
    if (currentMonth == 12) {
      nextMonth = 1;
    } else {
      nextMonth = _month + 1;
    }
    console.log('下一个月月份', nextMonth);
    /** 3、获取到上一个月对应的天数 */
    const lastMonthDays = new Date(currentYear, lastMonth, 0).getDate();
    console.log('上一个月对应的天数', lastMonthDays);
    /** 4、上一个月补位展示处理 */
    const lastSteps = idx; // 向前补好多位
    for (let i = 0; i <= lastSteps; i++) {
      const lastDay = lastMonthDays - idx + i + 1; // 上一个月补位对应的日
      dateArr[i] = `${lastMonth}.${lastDay}`; // 月.日（上一个月）
    }
    /** 5、当前月份展示处理 */
    for (let i = 0; i < days; i++) {
      const currentDay = i + 1; // 当前月份对应的日
      dateArr[lastSteps + i] = `${currentMonth}.${currentDay}`; // 月.日（当前月）
    }
    /** 6、下一个月补位展示处理 */
    const nextSteps = 6 - nextIdx; // 向后补好多位
    for (let i = 0; i < nextSteps; i++) {
      const nextDay = i + 1; // 下一个月补位对应的日
      dateArr[days + lastSteps + i] = `${nextMonth}.${nextDay}`; // 月.日（下一个月）
    }
    console.log('日期数组数据', dateArr);
    // [...weekArr, ...dateArr]表示涵盖了第一行的日期，若不需要日期，则使用dateArr
    const rowDateArr = [...weekArr, ...dateArr].slice(row * 7, row * 7 + 7); // 获取到对应行的行数组数据
    console.log('行数组数据', rowDateArr);

    /** 渲染行数据 */
    return rowDateArr?.map((item, i) => {
      console.log('item', item);

      if (item === 0) {
        // 为0时，则返回一个空标签，不继续后续操作
        return <div key={i}></div>;
      }

      // 是否是 日期内容（true -> 不是星期内容，false -> 是星期内容）
      const isNotWeek = weekArr.indexOf(item) === -1;
      // 是否是 今年
      const isCurrentYear = currentYear === curYear;
      // 是否是 今月
      const isCurrentMonth = item?.split('.')[0] * 1 === _curMonth;
      // 是否是 今日
      const isCurrentDay = item?.split('.')[1] * 1 === _curDate;
      // 是否是 当前月份/父页面传过来的月份的日期（数据不为0 && 不是星期内容 && 是当前月份/父页面传过来的月份）
      const isCurrentDate = isNotWeek && isCurrentMonth;
      // 是否是 今年今月今日
      const isToday = isCurrentYear && isCurrentMonth && isCurrentDay;

      const calculateDate = d.getFullYear() + '-' + curMonth + '-' + curDate; // 当前年月日（比如：'2023-01-18'）
      // 当前日期对应一周的日期数组
      const weekDateArr = getWeekDataList(calculateDate);
      console.log('当前日期对应一周的日期数组', weekDateArr);

      /** 处理签到类型 */
      let type = 1; // 签到类型
      if (item?.split('.')[0] * 1 < _curMonth) {
        // 上一个月
        type = 1;
      } else if (item?.split('.')[0] * 1 === _curMonth) {
        // 今月
        if (item?.split('.')[1] * 1 < _curDate) {
          // 今日之前
          type = 1;
        } else if (item?.split('.')[1] * 1 === _curDate) {
          // 今日
          type = 2;
        } else {
          // 今日之后
          type = 3;
        }
      } else {
        // 下一个月
        type = 3;
      }

      return (
        <div className="outerBox" key={`${currentYear}_${currentMonth}_${row}_${i}`}>
          <div className="innerContent">
            {/* 签到状态（星期排除处理）*/}
            {isNotWeek && statusMap[type]}
            {/* 今月的字体为黑色blackText，非今月的为灰色 */}
            <p className={`dateNum ${isCurrentDate ? 'blackText' : ''}`}>{isToday ? '今天' : item}</p>
          </div>
        </div>
      );
    })
  }

  return (
    <div className="calendar">
      <div className="date">
        {
          // 因为第一行需展示日期，所以最多7行
          Array(7).fill('').map((item, index) => {
            return (
              <div className='row' key={index}>{renderDays(index)}</div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Calendar;