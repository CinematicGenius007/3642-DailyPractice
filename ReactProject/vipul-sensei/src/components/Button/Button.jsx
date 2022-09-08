import PropTypes from 'prop-types';

export default function Button({children, style, onClick}) {
    return (
        <button
            style={style}
            className="py-2 px-6 bg-neutral-900 text-white rounded text-lg"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.string,
};

Button.defaultProps = {
    style: {},
    onClick: () => { console.log("default"); },
    children: "Default"
};