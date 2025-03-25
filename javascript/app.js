document.getElementById('calculateBtn').addEventListener('click', function() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    if (!isValidDate(day, month, year)) {
        alert('Please enter a valid date!');
        return;
    }
    
    const age = calculateAge(day, month, year);
    
    document.getElementById('years').textContent = age.years;
    document.getElementById('months').textContent = age.months;
    document.getElementById('days').textContent = age.days;
});

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

function calculateAge(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(
            currentDate.getFullYear(), 
            currentDate.getMonth(), 
            0
        );
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}