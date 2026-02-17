/**
 * NumberTicker Component
 * Animated counter with spring physics
 * Used for dashboard metrics in Hero section
 */

'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface NumberTickerProps {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
    value,
    duration = 2,
    prefix = '',
    suffix = '',
    decimals = 0,
    className = '',
}) => {
    const spring = useSpring(0, {
        stiffness: 50,
        damping: 30,
        mass: 1,
    });

    const display = useTransform(spring, (current) => {
        return prefix + current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + suffix;
    });

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.span>{display}</motion.span>
        </motion.span>
    );
};

export default NumberTicker;
