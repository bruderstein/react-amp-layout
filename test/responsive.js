import * as React from 'react';
import test from 'ava';
import render from './_util-render';

import {Responsive} from '../source/';

test('Responsive renders', t => {
	const vdom = render(<Responsive />);

	{
		const it = `should render an element of type div`;
		const actual = vdom.type;
		const expected = 'div';

		t.is(actual, expected, it);
	}

	{
		const it = `should render a child div used stretch element`;
		const actual = vdom.props.children.type;
		const expected = 'div';

		t.is(actual, expected, it);
	}
});

test('Responsive renders props passed to component', t => {
	const vdom = render(
		<Responsive className="test" style={{color: 'red'}} />
	);

	{
		const it = `should have a className of "test"`;
		const actual = vdom.props.className;
		const expected = 'test';

		t.is(actual, expected, it);
	}

	{
		const it = `should set the style prop correctly`;
		const actual = vdom.props.style.color;
		const expected = 'red';

		t.same(actual, expected, it);
	}
});

test('Responsive renders default style for wrapper and stretch element', t => {
	const vdom = render(<Responsive />);

	{
		const it = `should set position of wrapper to "relative"`;
		const actual = vdom.props.style.position;
		const expected = 'relative';

		t.is(actual, expected, it);
	}

	{
		const it = `should set height of wrapper to 0`;
		const actual = vdom.props.style.height;
		const expected = 0;

		t.is(actual, expected, it);
	}

	{
		const it = `should render style for stretch element`;
		const actual = vdom.props.children.props.style;
		const expected = {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		};

		t.same(actual, expected, it);
	}
});

test('Responsive calculates padding-bottom for wrapper', t => {
	const vdom = render(
		<Responsive width="16" height="9" />
	);

	const it = `should have an aspect ratio of 56.25%`;
	const actual = vdom.props.style.paddingBottom;
	const expected = '56.25%';

	t.is(actual, expected, it);
});
