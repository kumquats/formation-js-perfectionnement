// export const formatDate = date => date.replace(
// 	/^(\d{2,4})-(\d{2})-(\d{2})$/,
// 	'$3/$2/$1'
// );
export const formatDate = date => {
	const monthNames = [ 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre' ];
	const matches = date.match( /^(?<year>\d{2,4})-(?<month>\d{2})-(?<day>\d{2})$/ )
	if ( !matches ) {
		return date;
	}
	const { year, month, day } = matches.groups;
	return `${day} ${monthNames[ parseInt( month ) - 1 ]} ${year}`;
};