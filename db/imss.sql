-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2017 a las 22:05:08
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `imss`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `idCita` int(20) NOT NULL,
  `fechaCita` date NOT NULL,
  `horaInicioCita` time NOT NULL,
  `tipoCita` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `idClinica` int(11) NOT NULL,
  `noAfiliacion` bigint(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`idCita`, `fechaCita`, `horaInicioCita`, `tipoCita`, `idClinica`, `noAfiliacion`) VALUES
(1, '2017-12-08', '08:25:00', 'Pediatria', 2, 12345678901),
(2, '2017-12-08', '09:15:00', 'General', 2, 12345678901);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clinicas`
--

CREATE TABLE `clinicas` (
  `idClinica` int(11) NOT NULL,
  `nombreClinica` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `municipio` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `codPost` int(6) NOT NULL,
  `calle` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `numero` int(5) DEFAULT NULL,
  `colonia` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `noConsutorios` int(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clinicas`
--

INSERT INTO `clinicas` (`idClinica`, `nombreClinica`, `estado`, `municipio`, `codPost`, `calle`, `numero`, `colonia`, `telefono`, `noConsutorios`) VALUES
(1, 'Benito Juarez', 'Querétaro', 'Qeretaro', 76000, 'Av. 5 de Febrero', 105, 'Col. Centro', '2101616', 1),
(2, 'asd', 'Querétaro', 'Corregidora', 76924, 'df', 1, 'Santuarios Residencial', '124', 1),
(3, 'as', 'Querétaro', 'Corregidora', 76910, 'Av. Paseo Constituyentes', 15, 'Pueblo Nuevo', '2101615', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `idDoctor` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `municipio` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `codPost` int(6) NOT NULL,
  `calle` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `numero` int(5) NOT NULL,
  `colonia` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` bigint(11) NOT NULL,
  `email` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `cedulaProfesional` int(9) DEFAULT NULL,
  `idClinica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`idDoctor`, `nombre`, `apellidos`, `estado`, `municipio`, `codPost`, `calle`, `numero`, `colonia`, `telefono`, `email`, `cedulaProfesional`, `idClinica`) VALUES
(1, 'Juan', 'Mendoza', 'Querétaro', 'Corregidora', 76925, 'Gardenias', 1, 'Bravo', 4422232425, 'juan@gmail.com', 12345678, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `password` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `noAfiliacion` bigint(12) NOT NULL,
  `email` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `celular` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`password`, `noAfiliacion`, `email`, `celular`) VALUES
('1234', 12345678901, 'jorgitomaya1@gmail.com', 4421348001);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `noAfiliacion` bigint(12) NOT NULL,
  `email` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` bigint(11) NOT NULL,
  `estado` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `municipio` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `codPost` int(6) NOT NULL,
  `calle` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `numero` int(5) NOT NULL,
  `colonia` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `tipoUsuario` tinyint(4) NOT NULL DEFAULT '0',
  `idClinica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `apellidos`, `noAfiliacion`, `email`, `telefono`, `estado`, `municipio`, `codPost`, `calle`, `numero`, `colonia`, `tipoUsuario`, `idClinica`) VALUES
('Jorge', 'Maya', 12345678901, 'jorgitomaya1@gmail.com', 4421348001, 'Querétaro', 'Corregidora', 76925, 'Azucenas', 1, 'Bravo', 0, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idCita`),
  ADD KEY `idClinica` (`idClinica`),
  ADD KEY `noAfiliacion` (`noAfiliacion`);

--
-- Indices de la tabla `clinicas`
--
ALTER TABLE `clinicas`
  ADD PRIMARY KEY (`idClinica`);

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`idDoctor`),
  ADD UNIQUE KEY `idClinica` (`idClinica`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`noAfiliacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`noAfiliacion`),
  ADD UNIQUE KEY `noAfiliacion` (`noAfiliacion`),
  ADD KEY `idClinica` (`idClinica`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `idCita` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `clinicas`
--
ALTER TABLE `clinicas`
  MODIFY `idClinica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `doctores`
--
ALTER TABLE `doctores`
  MODIFY `idDoctor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`noAfiliacion`) REFERENCES `usuarios` (`noAfiliacion`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `clinica` FOREIGN KEY (`idClinica`) REFERENCES `clinicas` (`idClinica`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD CONSTRAINT `doctores_ibfk_1` FOREIGN KEY (`idClinica`) REFERENCES `clinicas` (`idClinica`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD CONSTRAINT `servicio_ibfk_1` FOREIGN KEY (`noAfiliacion`) REFERENCES `usuarios` (`noAfiliacion`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idClinica`) REFERENCES `clinicas` (`idClinica`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
