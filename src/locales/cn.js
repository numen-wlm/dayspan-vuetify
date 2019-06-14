
export default {
    promptLabels: {
      actionRemove:       '确定要移除这个事件吗?',
      actionExclude:      '确定要删除这个事件吗?',
      actionCancel:       '确定要取消这个事件吗?',
      actionUncancel:     '确定要撤销此次取消操作吗?',
      actionSetStart:     '您确定要将此事件设置为第一条吗?',
      actionSetEnd:       '您确定要将此事件设置为最后一条吗?',
      actionMove:         '您确定要移动此事件吗?',
      actionInclude:      '您确定要添加事件发生吗?',
      move:               '您确定要移动此事件吗?',
      toggleAllDay:       '您确定要更改此事件是否全天发生吗?',
      removeExistingTime: '您确定要在此时删除所有事件吗?'
    },
    placeholder: {
      noTitle: '(无标题)'
    },
    patterns: {
      lastDay:        (day) => '该月最后一天',
      lastDayOfMonth: (day) => day.format('MMMM') + '月最后一天',
      lastWeekday:    (day) => day.format('MMMM') + '月最后' + day.format('dddd') +'天'
    },
    colors: [
      { text: '红' },
      { text: '粉' },
      { text: '紫' },
      { text: '深紫' },
      { text: '靛蓝' },
      { text: '蓝' },
      { text: '胶白' },
      { text: '浅蓝' },
      { text: '蓝绿' },
      { text: '黄绿' },
      { text: '绿' },
      { text: '浅绿' },
      { text: '灰白' },
      { text: '黄' },
      { text: '琥珀' },
      { text: '橙' },
      { text: '深橙' },
      { text: '棕' },
      { text: '灰蓝' },
      { text: '灰' },
      { text: '黑' }
    ],
    icons: [
      { text: '警报' },
      { text: '赞' },
      { text: '喜欢' },
      { text: '活动' },
      { text: '作业' },
      { text: '警告' },
      { text: '钱' },
      { text: '费用' },
      { text: '家' },
      { text: '播放' },
      { text: '邮件' },
      { text: '电话' },
      { text: '图表' },
      { text: '自行车' },
      { text: '旅行' }
    ],
    defaults: {
      dsDay: {
        formats: {
          month:  'MMM'
        }
      },
      dsCalendarApp: {
        types: [
          { label: '日' },
          { label: '周' },
          { label: '月' },
          { label: '年' },
          { label: '日程' },
          { label: '四日' }
        ],
        formats: {
          today: 'dddd, MMMM D',
          xs: 'MMM'
        },
        labels: {
          next: (type) => type ? '次 ' + type.label.toLowerCase() : '次',
          prev: (type) => type ? '前 ' + type.label.toLowerCase() : '前',
          moveCancel: '取消移动',
          moveSingleEvent: '移动事件',
          moveOccurrence: '只移动本次事件',
          moveAll: '移动所有的事件',
          moveDuplicate: '添加事件',
          promptConfirm: '是',
          promptCancel: '否',
          today: '今日'
        }
      },
      dsAgendaEvent: {
        formats: {
          firstLine:  'ddd',
          secondLine: 'MMM Do',
          start:      'dddd, MMMM D',
          time:       'h:mm a'
        },
        labels: {
          allDay:   '全天',
          options:  '选项',
          close:    '关闭',
          day:      ['日', '日'],
          days:     ['日', '日'],
          minute:   ['分钟', '分钟'],
          minutes:  ['分钟', '分钟'],
          hour:     ['小时', '小时'],
          hours:    ['小时', '小时'],
          week:     ['周', '周'],
          weeks:    ['周', '周'],
          second:   ['秒', '秒'],
          seconds:  ['秒', '秒'],
          busy:     '忙',
          free:     '闲'
        }
      },
      dsCalendarEventChip: {
        formats: {
          fullDay:          'ddd MMM Do YYYY',
          timed:            'ddd MMM Do YYYY'
        }
      },
      dsCalendarEventPopover: {
        formats: {
          start:    'dddd, MMMM D',
          time:     'h:mm a'
        },
        labels: {
          allDay:   '全天',
          options:  '选项',
          close:    '关闭',
          day:      ['日', '日'],
          days:     ['日', '日'],
          minute:   ['分钟', '分钟'],
          minutes:  ['分钟', '分钟'],
          hour:     ['小时', '小时'],
          hours:    ['小时', '小时'],
          week:     ['周', '周'],
          weeks:    ['周', '周'],
          second:   ['秒', '秒'],
          seconds:  ['秒', '秒'],
          busy:     '忙',
          free:     '闲'
        }
      },
      dsCalendarEventCreatePopover: {
        formats: {
          start:    'dddd, MMMM D',
          time:     'h:mm a'
        },
        labels: {
          allDay:   '全天',
          options:  '选项',
          close:    '关闭',
          day:      ['日', '日'],
          days:     ['日', '日'],
          minute:   ['分钟', '分钟'],
          minutes:  ['分钟', '分钟'],
          hour:     ['小时', '小时'],
          hours:    ['小时', '小时'],
          week:     ['周', '周'],
          weeks:    ['周', '周'],
          second:   ['秒', '秒'],
          seconds:  ['秒', '秒'],
          busy:     '忙',
          free:     '闲',
          location: '位置',
          description: '添加描述',
          calendar: '日历',
        },
        busyOptions: [
          {text: '忙'},
          {text: '闲'}
        ]
      },
      dsSchedule: {
        labels: {
          editCustom:   '编辑'
        }
      },
      dsEvent: {
        labels: {
          moreActions:  '更多...',
          cancel:       '取消事件更改',
          save:         '保存',
          title:        '标题',
          exclusions:   '这些事件或时间跨度将正常发生的事件排除在日程之外。如果事件发生被移动，此处将排除事件。',
          inclusions:   '这些是在正常发生的时间表之外添加事件的事件或时间跨度。如果事件发生被移动，事件将被添加到此处。',
          cancelled:    '这些事件或事件被取消的时间跨度。',
          edit:         '编辑事件',
          add:          '添加事件',
          location:     '添加位置',
          description:  '添加描述',
          calendar:     '日历',
          tabs: {
            details:    '事件详细',
            forecast:   '预报',
            removed:    '已移除',
            added:      '已添加',
            cancelled:  '已取消'
          }
        },
        busyOptions: [
          {text: '忙'},
          {text: '闲'}
        ]
      },
      dsScheduleActions: {
        labels: {
          remove:     '移除这个事件',
          exclude:    '移除这个发生',
          cancel:     '取消这个发生',
          uncancel:   '恢复取消',
          move:       '移动这个事件',
          include:    '添加新的事件',
          setStart:   '设置这个事件为第一条',
          setEnd:     '设置这个事件为最后一条',
          pickerOk:   'OK',
          pickerCancel:'取消'
        }
      },
      dsScheduleForecast: {
        labels: {
          prefix:     '预报显示上一个&下一个',
          suffix:     '一年内发生的事'
        }
      },
      dsScheduleFrequencyDay: {
        labels: {
          type: '日'
        },
        options: [
          { text: '任意日' },
          { text: '在后续的日期...' },
          { text: '每 _ 天 在 _ 开始' }
        ],
        types: [
          { text: '该月日期' },
          { text: '该月最后一天' },
          { text: '该年日期' }
        ]
      },
      dsScheduleFrequencyDayOfWeek: {
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        labels: {
          type: '星期'
        },
        options: [
          { text: '周内任意日' },
          { text: '周内剩余日...' },
          { text: '每周 _ 开始于 _' },
          { text: '周末' },
          { text: '星期' }
        ]
      },
      dsScheduleFrequencyMonth: {
        labels: {
          type: '月'
        },
        months: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        options: [
          { text: '任意月' },
          { text: '剩余月...' },
          { text: '每 _ 月 开始 _' }
        ]
      },
  
      dsScheduleFrequencyWeek: {
        labels: {
          type: '周'
        },
        options: [
          { text: '任意周' },
          { text: '剩余的周...' },
          { text: '每 _ 周 开始 _' }
        ],
        types: [
          { text: '月内周 (第一周有周四)' },
          { text: '一个月的周数(从每月的第一天开始)' },
          { text: '一个月中的整周(如果有，0=前一周)' },
          { text: '一个月的最后一周(从每月的最后一天开始)' },
          { text: '一个月的最后整周(如果有，0 =后一周)' },
          { text: '一年中的一周(第一周有周四)' },
          { text: '一年中的一周(从一年的第一天开始)' },
          { text: '一年中的整周(如果有，0 =前一周)' },
          { text: '一年中的最后一周(从一年的最后一天开始)' },
          { text: '一年中的最后整周(如果有，0=后一周)' }
        ]
      },
  
      dsScheduleFrequencyYear: {
        labels: {
          type: '年'
        },
        options: [
          { text: '任意年' },
          { text: '剩余的年...' },
          { text: '每 _ 年 开始 _' }
        ]
      },
  
      dsScheduleSpan: {
        labels: {
          startless:  '开始时间',
          endless:    '结束时间'
        },
        formats: {
          start:      'MMMM Do, YYYY',
          end:        'MMMM Do, YYYY'
        }
      },
  
      dsScheduleTime: {
        labels: {
          remove:     '移除时间',
          add:        '添加时间'
        }
      },
  
      dsScheduleTimes: {
        labels: {
          all:        '整天',
          minute:     '分',
          minutes:    '分',
          hour:       '时',
          hours:      '时',
          day:        '日',
          days:       '日',
          week:       '周',
          weeks:      '周',
          month:      '月',
          months:     '月',
          second:     '秒',
          seconds:    '秒'
        }
      },
  
      dsScheduleType: {
        formats: {
          date:       'LL'
        }
      },
  
      dsScheduleTypeCustomDialog: {
        labels: {
          save:     '保存',
          cancel:   '取消'
        }
      },
  
      dsWeekDayHeader: {
        formats: {
          weekday:    'ddd'
        }
      },
  
      dsWeeksView: {
        weekdays: ['日', '一', '二', '三', '四', '五', '六']
      },
  
      dsDaysView: {
        hours: [
          '    ', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
          '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
        ]
      },
  
      dsDayPicker: {
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        labels: {
          prevMonth: '上月',
          nextMonth: '下月'
        }
      }
    }
  }
  