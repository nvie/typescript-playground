// Test

import { groupby } from 'itertools'

const things = [
    {id: 1, name: 'foo'},
    {id: 2, name: 'bar'},
]

const xs = groupby(things, thing => thing.id)
for (const [k, _x] of xs) {
    const x = [..._x]
    console.log(k)
    console.log(x[0])
    console.log(x['foo'])
}

const ys = groupby(things, thing => thing.name)
for (const [k, _y] of ys) {
    const y = [..._y]
    console.log(k)
    console.log(y[0])
    console.log(y['foo'])
}
