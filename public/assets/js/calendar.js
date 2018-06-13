$(document).ready(function () {


    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events .fc-event').each(function () {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
        });
    });

    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'addEventButton,month,agendaWeek,agendaDay'
        },
        customButtons: {
            addEventButton: {
                text: 'add event...',
                click: function () {
                    var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                    var date = moment(dateStr);
                    var titleStr = prompt('Enter the title of the Event');

                    if (date.isValid()) {
                        $('#calendar').fullCalendar('renderEvent', {
                            title: titleStr,
                            start: date,
                            allDay: true
                        });
                        alert('Great. You have added an event');
                    } else {
                        alert('Invalid date.');
                    }
                }
            }
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        events: [{
            "title": "Lunch",
            "start": "2018-06-10T12:00:00-05:00"
        },
        {
            "title": "Meeting",
            "start": "2018-06-21T14:30:00-05:00"
        },
        {
            "title": "Happy Hour",
            "start": "2018-06-30T17:30:00-05:00"
        },
        {
            "title": "Dinner",
            "start": "2018-06-15T20:00:00"
        },
        {
            "title": "Birthday Party",
            "start": "2018-06-13T07:00:00-05:00"
        },
        ],
    });
});