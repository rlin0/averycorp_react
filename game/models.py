from django.db import models


class Profile(models.Model):
    """Model representing a player."""
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)

    first_name = models.CharField(max_length=20, help_text='First name')
    last_name = models.CharField(max_length=20, help_text='Last name')
    team = models.ForeignKey('Team',
                             on_delete=models.SET_NULL,
                             blank=True,
                             null=True)
    role = models.ForeignKey('Role',
                             on_delete=models.SET_NULL,
                             blank=True,
                             null=True)
    progress = models.IntegerField(default=0)

    def __str__(self):
        """String for representing the Model object."""
        return str(self.username)


class Team(models.Model):
    """Model representing a team."""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)
    puzzle_id = models.IntegerField(
        default=0, help_text='id of puzzle team is currently on')

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Role(models.Model):
    """Model representing a role."""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        """String for representing the Model object."""
        return self.name
