export const formatDate = date => {
	const monthNames = [ 'janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
	const matches = date.match(/^(?<year>\d{2,4})-(?<month>\d{2})-(?<day>\d{2})(T?(?<hours>\d{1,2}):(?<minutes>\d{1,2}).*)?$/);
	if (!matches) {
		return date;
	}
	const {year, month, day, hours, minutes} = matches.groups;
	let result = `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
	if ( hours && minutes ) {
		result += ` à ${(parseInt(hours, 10) + 2)}h${ minutes }`;
	}
	return result;
};