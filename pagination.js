const pages = [
    { url: '/page1' },
    { url: '/page2' },
    { url: '/page3', current: true },
    { url: '/page4' },
    { url: '/page5' },
]

const paginate = (pages, selector) => {
    const currentPageIndex = pages.findIndex(page => page.current)
    const html = `
        <ul class="pagination-list">
            <li class="previous">
                ${pages[0].current ? `
                    <span>‹</span>
                ` : `
                    <a href="${pages[currentPageIndex - 1].url}">‹</a>
                `}
            </li>
            ${pages.map((item, index) => `
                <li${item.current ? ' class="current"' : ''}>
                    ${item.current ? `
                        <span>${index + 1}</span>
                    ` : `
                        <a href="${item.url}">${index + 1}</a>
                    `}
                </li> 
            `).join('')}
            <li class="next">
                ${pages[pages.length - 1].current ? `
                    <span>›</span>
                ` : `
                    <a href="${pages[currentPageIndex + 1].url}">›</a>
                `}
            </li>
        </ul>
    `

    document.querySelector(selector).innerHTML = html
}

const paginateWithOptions = (pages, selector, options) => {
    const {
        showPreviousAndNext
    } = options

    const currentPageIndex = pages.findIndex(page => page.current)
    const html = `
        <ul class="pagination-list">
            ${showPreviousAndNext ? `
                <li class="previous">
                    ${pages[0].current ? `
                        <span>‹</span>
                    ` : `
                        <a href="${pages[currentPageIndex - 1].url}">‹</a>
                    `}
                </li>
            ` : ''}
            ${pages.map((item, index) => `
                <li${item.current ? ' class="current"' : ''}>
                    ${item.current ? `
                        <span>${index + 1}</span>
                    ` : `
                        <a href="${item.url}">${index + 1}</a>
                    `}
                </li> 
            `).join('')}
            ${showPreviousAndNext ? `
                <li class="next">
                    ${pages[pages.length - 1].current ? `
                        <span>›</span>
                    ` : `
                        <a href="${pages[currentPageIndex + 1].url}">›</a>
                    `}
                </li>
            ` : ''}
        </ul>
    `

    document.querySelector(selector).innerHTML = html
}


paginate(pages, '.pagination')
// paginateWithOptions(pages, '.pagination', {
//     showPreviousAndNext: false
// })
