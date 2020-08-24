import React, {FC, useState} from 'react';
// oraz hook usePagination(dataEntries, elementsOnPage)

interface paginationProps {
    dataEntries: Array<any>,
    elementsOnPage: number
}

const usePagination: FC<paginationProps> = (dataEntries, elementsOnPage=2) => {

    const [paginationState, usePaginationState] = useState([]);
    const [paginationActions, usePaginationActions] = useState([]);


    return (
        <>
            <h1>abc</h1>
            <p>{dataEntries}</p>
        </>
    )
}

export default usePagination;

// // który zwraca poniższe dane
// const [
// 	{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
// 	{ goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }
// ] = usePagination(dataEntries)

// actualPageIdx to index aktualnej strony
// lastPageIdx to index ostatniej strony
// entriesOnSelectedPage to przy elementsOnPage = 50 zawiera 50 elementów z dataEntries dla aktualnej strony
// isBusy - boolean true/false, defaultowo false, który jest włączony na 333ms podczas gdy zmieniana jest strona i wyświetlane są nowe dane

// goToPage(pageIdx) - zmienia daną stronę
// goToFirstPage, goToPrevPage, goToNextPage, goToLastPage - zmienia stronę na odpowiednią