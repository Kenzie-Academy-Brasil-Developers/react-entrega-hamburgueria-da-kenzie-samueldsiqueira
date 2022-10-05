import style from './Header.module.css';

const Header = ({ handleSearch, children }) => {
	return (
		<nav className={style.brand}>
			<div className={style.brandLogo}>
				<h1>
					Burger <strong>Kenzie</strong>
				</h1>
			</div>
			<div className={style.searchInput}>
				<input className={style.brandSearch} onChange={handleSearch} type='search' name='search' placeholder='Digitar Pesquisa' />
				<input className={style.btnSearch} type='submit' value='Pesquisar' />
			</div>
		</nav>
	);
};

export default Header;
