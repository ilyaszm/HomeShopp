
/** Pagination function*/

function ShowPage(id)
{
    var numberOfPages = 2;
    
    for(i = 0; i <= numberOfPages; i++)
    {
        if(document.getElementById('page' + i))
            document.getElementById('page' + i).style.display = 'none';
    }

    if(document.getElementById('page' + id))
        document.getElementById('page' + id).style.display = 'block';
}

