CREATE TABLE `Tipo` (
  `id` int(2) NOT NULL default '0',
  `opcion1` varchar(255) NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM;

INSERT INTO `Tipo` (`id`, `opcion1`) VALUES (1, 'Notebook'),
(2, 'Portatil'),
(3, 'Ultrabook'),
(4, 'Portable');

CREATE TABLE `Procesador` (
  `id` int(2) NOT NULL default '0',
  `opcion2` varchar(255) NOT NULL default '',
  `id_opcion1` int(2) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM;

INSERT INTO `Procesador` (`id`, `opcion2`, `id_opcion1`) VALUES 
(1, 'i3', 1),
(2, 'i3', 2),
(3, 'i5', 2),
(4, 'i7', 2),
(5, 'i5', 3),
(6, 'i7', 3),
(7, 'i3', 4),
(8, 'i5', 4),
(9, 'i7', 4);

CREATE TABLE `Disco_duro` (
  `id` int(2) NOT NULL default '0',
  `opcion3` varchar(255) NOT NULL default '',
  `id_opcion1` int(2) NOT NULL default '0',
  `id_opcion2` int(2) NOT NULL default '0',
   `precio` int(2) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM;

INSERT INTO `Disco_duro` (`id`, `opcion3`, `id_opcion2`,`id_opcion1`, `precio`) VALUES 
(1, '500GB', 1,1,400),
(2, '750GB', 1,1,500),
(3, '500GB', 2,2,500),
(4, '750GB', 2,2,550),
(5, '500GB', 3,2,600),
(6, '750GB', 3,2,650),
(7, '500GB', 4,2,800),
(8, '1TB', 4,2,900),
(9, '500GB', 5,3,1000),
(10, '750GB', 5,3,1100),
(11, '500GB', 6,3,1400),
(12, '750GB', 6,3,1500),
(13, '500GB', 7,4,400),
(14, '750GB', 7,4,500),
(15, '500GB', 8,4,600),
(16, '750GB', 8,4,700),
(17, '500GB', 9,4,800),
(18, '750GB', 9,4,900);