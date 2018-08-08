const worksheet1 = {
    name: 'Worksheet 1',
    columns: ['a', 'b', 'c'],
    rows: [
        [
           { label: '1 drill', drillTo: [{ label: 'worksheet 2', to: 'worksheet_2' }] },
           { label: 100 },
           { label: 50 },
        ],
        [
           { label: '2 drills', drillTo: [{ label: 'worksheet 2', to: 'worksheet_2' }, { label: 'worksheet 3', to: 'worksheet_3' }] },
           { label: 80 },
           { label: 20 },
        ]
    ]
};

const worksheet2 = {
    name: 'Worksheet 2',
    columns: ['d', 'e'],
    rows: [
        [
            { label: 12 },
            { label: 42 }
        ],
        [
            { label: 52 },
            { label: 22 }
        ]
    ]
};

const worksheet3 = {
    name: 'Worksheet 3',
    columns: ['f'],
    rows: [
        [
            { label: 80 }
        ],
        [
            { label: 30 }
        ]
    ]
}

export const worksheets = [worksheet1, worksheet2, worksheet3 ];
