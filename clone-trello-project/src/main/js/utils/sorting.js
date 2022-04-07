export default class List {
	constructor(list) {
		this.list = list;
	}

	static sortByDateCreatedAt = (a, b) => {
		if (a.created_at > b.created_at) {
			return -1;
		}
		if (a.created_at < b.created_at) {
			return 1;
		}
		return 0;
	};
}
